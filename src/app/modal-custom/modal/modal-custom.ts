import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalCustomDialog } from '../dialog/modal-custom-dialog';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'modal-custom',
  styleUrls: ['modal-custom.css'],
  templateUrl: 'modal-custom.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ModalCustom {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalCustomDialog, {
      width: '50%',
      height: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}