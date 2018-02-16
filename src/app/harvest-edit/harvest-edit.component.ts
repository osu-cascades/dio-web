import {Component, OnInit} from '@angular/core';
import {Harvest, HarvestsService} from '../services/harvests.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-harvest-edit',
  templateUrl: './harvest-edit.component.html',
  styleUrls: ['./harvest-edit.component.css']
})
export class HarvestEditComponent implements OnInit {
  harvest = new Harvest();

  constructor(private harvestService: HarvestsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.harvestService.getHarvest(id))
      .subscribe(harvest => this.harvest = harvest);
  }

}
