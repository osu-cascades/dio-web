import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService implements OnInit {
  constructor(private http: HttpClient) {
  }
  getRecentSensorData() {
    return this.http.get('https://vv-dio-service-staging.herokuapp.com/api/v1/do/readings');
  }
  ngOnInit(): void {
  }
}
