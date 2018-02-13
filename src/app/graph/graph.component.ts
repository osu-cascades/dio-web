import {Component, Input, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import {GraphService} from '../services/graph.service';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() readings: Reading[];
  @ViewChild(BaseChartDirective) chart;
  lineChartData: Array<any> = [];
  lineChartLabels: Array<any> = [];
  lineChartOptions: any = {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false
    }
  };
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private graphService: GraphService) {
  }

  ngOnInit() {
    this.transformData(this.readings);
    this.graphService.dataChanged.subscribe((readings) => {
      this.clearData();
      this.transformData(readings);
    });
  }

  clearData() {
    this.lineChartLabels.pop();
    _.forEach(this.lineChartData, (item) => {
      item.data.pop();
    });
    this.chart.chart.update();
  }

  transformData(data: Reading[]) {
    const chartData = [];
    const labels = [];
    _.forEach(data, (reading) => {
      reading.createdAt = moment(reading.createdAt).format('h:mma');
      labels.push(reading.createdAt);
      chartData.push(reading.reading);
    });
    chartData.reverse();
    labels.reverse();
    this.lineChartLabels = labels;
    this.lineChartData.push({data: chartData, label: 'DO'});
  }
}

export class Reading {
  reading: number;
  location: string;
  createdAt: string;
}
