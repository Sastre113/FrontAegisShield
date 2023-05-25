import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalCustomDialog } from '../dialog/modal-custom-dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'modal-custom',
  styleUrls: ['button-modal-custom.css'],
  templateUrl: 'button-modal-custom.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ButtonModalCustom {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalCustomDialog, {
      width: '50%',
      autoFocus: true,
      maxWidth: '90vh',
      maxHeight: '90vh',
      hasBackdrop: true, // background shadow
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}