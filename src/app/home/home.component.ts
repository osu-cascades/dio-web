import {Component, OnInit} from '@angular/core';
import {Reading} from '../graph/graph.component';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readings: Reading[];
  isDataAvailable = false;

  constructor(private client: ApiService) {
  }

  ngOnInit() {
    this.client.getRecentSensorReadings()
      .subscribe((readings) => {
        this.readings = readings;
        this.isDataAvailable = true;
    });
  }

}
