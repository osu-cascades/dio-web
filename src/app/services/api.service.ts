import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reading} from '../graph/graph.component';
import 'rxjs/add/operator/map';
import {DateRangeRequest} from '../date-range-picker/date-range-picker.component';

@Injectable()
export class ApiService implements OnInit {
  headers: HttpHeaders = new HttpHeaders().set('Content-type', 'application/json');
  constructor(private http: HttpClient) {
  }

  getRecentSensorReadings() {
    return this.http.get<Reading[]>('https://vv-dio-service-staging.herokuapp.com/api/v1/do/readings/recent');
  }

  getLastSensorReading() {
    return this.http.get<Reading>('https://vv-dio-service-staging.herokuapp.com/api/v1/do/readings/last');
  }

  submitQuery(request: DateRangeRequest) {
    return this.http.post<DateRangeRequest>(`https://vv-dio-service-staging.herokuapp.com/api/v1/do/query`, request,
      {headers: this.headers});
  }

  ngOnInit(): void {
  }
}
