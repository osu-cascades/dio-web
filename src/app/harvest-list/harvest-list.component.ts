import { Component, OnInit } from '@angular/core';
import {ApiService, Harvest} from '../services/api.service';

@Component({
  selector: 'app-harvest-list',
  templateUrl: './harvest-list.component.html',
  styleUrls: ['./harvest-list.component.css']
})
export class HarvestListComponent implements OnInit {
  harvests: Harvest[] = [];
  dataIsAvailable = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getHarvestList()
      .subscribe((harvests) => {
        this.harvests = harvests;
        this.dataIsAvailable = true;
      });
  }

}
