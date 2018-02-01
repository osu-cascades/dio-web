import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import * as moment from 'moment';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  recentReadings: Reading[];
  isDataAvailable = false;
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

  constructor(private client: ApiService) {
  }

  ngOnInit() {
    this.client.getRecentSensorReadings()
      .subscribe((readings) => {
        console.log(readings);
        this.recentReadings = readings;
        this.transformData();
        this.isDataAvailable = true;
      });
  }

  transformData() {
    const data = [];
    const labels = [];
    _.forEach(this.recentReadings, (reading) => {
      reading.createdAt = moment(reading.createdAt).format('h:mm:ssa');
      labels.push(reading.createdAt);
      data.push(reading.reading);
    });
    data.reverse();
    labels.reverse();
    this.lineChartLabels = labels;
    this.lineChartData.push({data: data, label: 'DO'});
  }
}

export class Reading {
  id: number;
  reading: number;
  location: string;
  createdAt: string;
  updatedAt: string;
}
