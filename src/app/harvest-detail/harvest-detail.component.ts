import {Component, Input, OnInit} from '@angular/core';
import {Harvest} from '../services/api.service';

@Component({
  selector: 'app-harvest-detail',
  templateUrl: './harvest-detail.component.html',
  styleUrls: ['./harvest-detail.component.css']
})
export class HarvestDetailComponent implements OnInit {
  @Input() harvest: Harvest = new Harvest();

  constructor() { }

  ngOnInit() {
  }

}
