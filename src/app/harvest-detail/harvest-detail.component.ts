import {Component, Input, OnInit} from '@angular/core';
import {Harvest, HarvestsService} from '../services/harvests.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmationDialogueComponent} from '../confirmation-dialogue/confirmation-dialogue.component';

@Component({
  selector: 'app-harvest-detail',
  templateUrl: './harvest-detail.component.html',
  styleUrls: ['./harvest-detail.component.css']
})
export class HarvestDetailComponent implements OnInit {
  @Input() harvest: Harvest = new Harvest();
  dialogRef: MatDialogRef<ConfirmationDialogueComponent>;

  constructor(private harvestService: HarvestsService,
              public dialogue: MatDialog) {
  }

  ngOnInit() {
  }

  removeHarvest() {
    this.dialogRef = this.dialogue.open(ConfirmationDialogueComponent, {
      disableClose: false
    });

    this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this harvest?';

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.harvestService.deleteHarvest(this.harvest.id)
          .subscribe((response) => {
            console.log(response);
            this.harvestService.harvestRemoved.next(this.harvest);
          });
      }
      this.dialogRef = null;
    });

  }

}
