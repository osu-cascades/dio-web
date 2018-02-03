import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {GraphService} from '../services/graph.service';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {
  @ViewChild('dateForm') dateForm;
  @Output() didSubmit = new EventEmitter<boolean>();
  request: DateRangeRequest = new DateRangeRequest();

  constructor(private graphService: GraphService) { }

  ngOnInit() {
  }

  submitRequest() {
    this.request.startDate = moment(this.dateForm.value.startDate).toISOString();
    this.request.endDate = moment(this.dateForm.value.endDate).toISOString();
    this.graphService.sendRequestData(this.request);
    this.didSubmit.emit(true);
  }
}

export class DateRangeRequest {
  startDate: string;
  endDate: string;
}
