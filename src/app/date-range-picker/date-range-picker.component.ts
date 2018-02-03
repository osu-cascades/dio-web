import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../services/api.service';

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
    this.client.submitQuery(this.dateForm.value)
      .subscribe((response) => console.log(response));
  }
}

export class DateRangeRequest {
  startDate: string;
  endDate: string;
}
