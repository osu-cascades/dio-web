import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() readings: Reading[];
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

  constructor() {
  }

  ngOnInit() {
    this.transformData(this.readings);
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
