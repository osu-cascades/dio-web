import { Component, OnInit } from '@angular/core';
import {Reading} from '../graph/graph.component';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css']
})
export class SensorDetailComponent implements OnInit {
  lastReading: Reading;
  isDataReady = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLastSensorReading()
      .subscribe((reading) => {
        console.log(reading);
        this.lastReading = reading[0];
        this.isDataReady = true;
      });
  }

}
