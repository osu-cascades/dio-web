import { Component, OnInit } from '@angular/core';
import {Harvest, HarvestsService} from '../services/harvests.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-harvest-edit',
  templateUrl: './harvest-edit.component.html',
  styleUrls: ['./harvest-edit.component.css']
})
export class HarvestEditComponent implements OnInit {
  harvest = new Harvest();

  constructor(private harvestService: HarvestsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const harvestId: Observable<string> = this.route.params.map((param) => param.id);
    this.harvestService.getHarvest(+harvestId)
      .subscribe((harvest) => {
        this.harvest = harvest;
      });
  }

}
