import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DatetimeService {
  MySqlFormat = 'YYYY-MM-DD HH:MM:ss';

  constructor() {}

  static getEarliestLocalTimeOnDay(datetime: string): string {
    return moment(datetime).startOf('day').toISOString();
  }

  static getLatestLocalTimeOnDay(datetime: string): string {
    return moment(datetime).endOf('day').toISOString();
  }

  static getEarliestUtcTimeOnDay(datetime: string): string {
    return moment(datetime).utc().startOf('day').toISOString();
  }

  static getLatestUtcTimeOnDay(datetime: string): string {
    return moment(datetime).utc().endOf('day').toISOString();
  }
}
