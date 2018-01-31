import {AfterViewInit, Component, OnInit, SimpleChanges} from '@angular/core';
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
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private client: ApiService) {
  }

  ngOnInit() {
    this.client.getRecentSensorData()
      .subscribe((readings) => {
        this.recentReadings = readings;
        this.transformData();
        this.isDataAvailable = true;
      });
  }

  transformData() {
    const data = [];
    _.forEach(this.recentReadings, (reading) => {
      data.push(reading.reading);
      reading.createdAt = moment(reading.createdAt).format('MMM Do YYYY, h:mma');
      this.lineChartLabels.push(reading.createdAt);
    });
    console.log(this.recentReadings);
    this.lineChartData.push({data: data, label: 'DO'});
  }
}

export interface ReadingResponse {
  data: Array<Reading>;
}

export class Reading {
  id: number;
  reading: number;
  location: string;
  createdAt: string;
  updatedAt: string;
}
