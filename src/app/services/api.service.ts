import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reading} from '../graph/graph.component';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService implements OnInit {
  constructor(private http: HttpClient) {
  }

  getRecentSensorReadings() {
    return this.http.get<Reading[]>('https://vv-dio-service-staging.herokuapp.com/api/v1/do/readings/recent');
  }

  getLastSensorReading() {
    return this.http.get<Reading>('https://vv-dio-service-staging.herokuapp.com/api/v1/do/readings/last');
  }

  ngOnInit(): void {
  }
}
