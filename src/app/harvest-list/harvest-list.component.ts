import {Component, OnInit} from '@angular/core';
import {Harvest, HarvestsService} from '../services/harvests.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-harvest-list',
  templateUrl: './harvest-list.component.html',
  styleUrls: ['./harvest-list.component.css']
})
export class HarvestListComponent implements OnInit {
  harvests: Harvest[] = [];
  dataIsAvailable = false;

  constructor(private harvestsService: HarvestsService) {
  }

  ngOnInit() {
    this.harvestsService.getHarvestList()
      .subscribe((harvests) => {
        this.harvests = harvests;
        this.dataIsAvailable = true;
      });

    this.harvestsService.harvestCreated
      .subscribe((harvest: Harvest) => {
        this.harvests.push(harvest);
      });

    this.harvestsService.harvestRemoved
      .subscribe((harvest) => {
        const index = this.harvests.indexOf(harvest);
        this.harvests.splice(index, 1);
      });

  }
}
