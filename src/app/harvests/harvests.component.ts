import { Component, OnInit } from '@angular/core';
import {HarvestsService} from '../services/harvests.service';

@Component({
  selector: 'app-harvests',
  templateUrl: './harvests.component.html',
  styleUrls: ['./harvests.component.css']
})
export class HarvestsComponent implements OnInit {

  constructor(private harvestsService: HarvestsService) { }

  ngOnInit() {
  }

  createHarvest() {
    this.harvestsService.createHarvest()
      .subscribe((response) => {
        this.harvestsService.harvestCreated.next(response);
      });
  }

}
