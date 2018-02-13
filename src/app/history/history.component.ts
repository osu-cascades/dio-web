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
  readings: Reading[];
  isDataAvailable = false;

  constructor(private client: ApiService,
              private graphService: GraphService) {
  }

  ngOnInit() {
    this.graphService.dateRangeRequest
      .subscribe((request) => {
        this.client.getReadingsInRange(request)
          .subscribe((readings) => {
            this.readings = readings;
            this.isDataAvailable = true;
            this.graphService.dataChanged.next(readings);
          });
      });
  }


}
