import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {GraphService} from '../services/graph.service';
import {DatetimeService} from '../services/datetime.service';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {
  @ViewChild('dateForm') dateForm;
  @Output() didSubmit = new EventEmitter<boolean>();
  request: DateRangeRequest = new DateRangeRequest();

  constructor(private graphService: GraphService,
              private datetimeService: DatetimeService) { }

  ngOnInit() {
  }

  submitRequest() {
    this.request.startDate = this.datetimeService.getEarliestTimeOnDay(this.dateForm.value.startDate);
    this.request.endDate = this.datetimeService.getLatestTimeOnDay(this.dateForm.value.endDate);
    this.graphService.sendRequestData(this.request);
    this.didSubmit.emit(true);
  }
}

export class DateRangeRequest {
  startDate: string;
  endDate: string;
}
