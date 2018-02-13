import {Injectable} from '@angular/core';
import {DateRangeRequest} from '../date-range-picker/date-range-picker.component';
import {Reading} from '../graph/graph.component';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GraphService {
  dateRangeRequest = new Subject<DateRangeRequest>();
  dataChanged = new Subject<Reading[]>();

  constructor() {
  }
}
