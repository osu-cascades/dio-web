import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DatetimeService {
  MySqlFormat = 'YYYY-MM-DD HH:MM:ss';

  constructor() {}

  getEarliestTimeOnDay(datetime: string): string {
    return moment(datetime).startOf('day').toISOString();
  }

  getLatestTimeOnDay(datetime: string): string {
    return moment(datetime).endOf('day').toISOString();
  }
}
