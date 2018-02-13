import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-harvests',
  templateUrl: './harvests.component.html',
  styleUrls: ['./harvests.component.css']
})
export class HarvestsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  createHarvest() {
    this.api.createHarvest()
      .subscribe((response) => {
        console.log(response);
      });
  }

}
