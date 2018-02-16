import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation-dialogue',
  templateUrl: './confirmation-dialogue.component.html',
  styleUrls: ['./confirmation-dialogue.component.css']
})
export class ConfirmationDialogueComponent implements OnInit {
  confirmMessage: string;

  constructor(public dialogueRef: MatDialogRef<ConfirmationDialogueComponent>) {
  }

  ngOnInit() {
  }

  confirmDeleteDialog() {
    this.dialogueRef.close(true);
  }

  cancelDeleteDialog() {
    this.dialogueRef.close(false);
  }

}
