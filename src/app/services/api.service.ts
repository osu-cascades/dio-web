import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Reading, ReadingResponse} from '../graph/graph.component';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService implements OnInit {
  constructor(private http: HttpClient) {
  }

  getRecentSensorData() {
    return this.http.get<Reading[]>('http://localhost:3000/api/v1/do/readings/recent');
  }

  ngOnInit(): void {
  }
}
