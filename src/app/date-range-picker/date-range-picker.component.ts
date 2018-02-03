import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {
  @ViewChild('dateForm') dateForm;
  request: DateRangeRequest = new DateRangeRequest();

  constructor(private client: ApiService) { }

  ngOnInit() {
  }
  submitRequest() {
    this.request.startDate = moment(this.dateForm.value.startDate).toISOString();
    this.request.endDate = moment(this.dateForm.value.endDate).toISOString();
    this.client.getReadingsInRange(this.request)
      .subscribe((response) => console.log(response));
  }
}

export class DateRangeRequest {
  startDate: string;
  endDate: string;
}
