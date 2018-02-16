import {Component, Input, OnInit} from '@angular/core';
import {Harvest, HarvestsService} from '../services/harvests.service';

@Component({
  selector: 'app-harvest-detail',
  templateUrl: './harvest-detail.component.html',
  styleUrls: ['./harvest-detail.component.css']
})
export class HarvestDetailComponent implements OnInit {
  @Input() harvest: Harvest = new Harvest();

  constructor(private harvestService: HarvestsService) {
  }

  ngOnInit() {
  }

  removeHarvest() {
    this.harvestService.deleteHarvest(this.harvest.id)
      .subscribe((response) => {
        console.log(response);
        this.harvestService.harvestRemoved.next(this.harvest);
      });
  }

}
