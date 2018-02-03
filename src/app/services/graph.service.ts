import {Injectable} from '@angular/core';
import {DateRangeRequest} from '../date-range-picker/date-range-picker.component';

@Injectable()
export class GraphService {
  dateRangeRequest: DateRangeRequest;

  constructor() {
  }

  sendRequestData(request: DateRangeRequest) {
    this.dateRangeRequest = request;
  }

  getRequestData(): DateRangeRequest {
    return this.dateRangeRequest;
  }
}
