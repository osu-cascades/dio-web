import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DatetimeService {
  MySqlFormat = 'YYYY-MM-DD HH:MM:ss';

  constructor() {}

  getEarliestTimeOnDay(datetime: string) {
    return moment(datetime).startOf('day').format(this.MySqlFormat);
  }

  getLatestTimeOnday(datetime: string) {
    return moment(datetime).endOf('day').format(this.MySqlFormat);
  }
}
