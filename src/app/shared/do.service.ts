import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DoService {

  constructor(private http: HttpClient) { }

  getReadings() {
    return this.http.get('https://vv-dio-service-staging.herokuapp.com/api/v1/do/readings');
  }

}
