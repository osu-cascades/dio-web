import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';


@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {
  @ViewChild('picker') picker;
  @ViewChild('dateForm') dateForm;
  request: DateRangeRequest = new DateRangeRequest();
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  submitRequest() {
    console.log(this.dateForm);
  }

  constructor() { }

  ngOnInit() {
  }

}

class DateRangeRequest {
  startDate: string;
  endDate: string;
}
