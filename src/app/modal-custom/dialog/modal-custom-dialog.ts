import {Component} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'modal-custom-dialog',
  styleUrls: ['modal-custom-dialog.css'],
  templateUrl: 'modal-custom-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ModalCustomDialog {
  constructor(public dialogRef: MatDialogRef<ModalCustomDialog>) {}
}