import {Component, OnInit} from '@angular/core';
import {Reading} from '../graph/graph.component';
import {ApiService} from '../services/api.service';
import {GraphService} from '../services/graph.service';
import {DateRangeRequest} from '../date-range-picker/date-range-picker.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  request: DateRangeRequest;
  readings: Reading[];
  isDataAvailable = false;

  constructor(private client: ApiService,
              private graphService: GraphService) {
  }

  ngOnInit() {
  }

  rangeChanged(sent: boolean) {
    if (sent) {
      this.request = this.graphService.getRequestData();
      this.client.getReadingsInRange(this.request)
        .subscribe((readings) => {
          console.log(readings);
          this.readings = readings;
          this.isDataAvailable = true;
        });
    }
  }

}
