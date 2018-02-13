import {Component, OnInit, ViewChild} from '@angular/core';
import {GraphService} from '../services/graph.service';
import {DatetimeService} from '../services/datetime.service';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {
  @ViewChild('dateForm') dateForm;
  request: DateRangeRequest = new DateRangeRequest();

  constructor(private graphService: GraphService) { }

  ngOnInit() {
  }

  submitRequest() {
    this.request.startDate = DatetimeService.getEarliestLocalTimeOnDay(this.dateForm.value.startDate);
    this.request.endDate = DatetimeService.getLatestLocalTimeOnDay(this.dateForm.value.endDate);
    this.graphService.dateRangeRequest.next(this.request);
  }
}

export class DateRangeRequest {
  startDate: string;
  endDate: string;
}
