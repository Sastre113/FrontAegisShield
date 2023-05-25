import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() variableHija!: string;
  @Output() variableDelHijo: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ModalCustomDialog, {
      width: '50%',
      autoFocus: true,
      maxWidth: '90vh',
      maxHeight: '90vh',
      hasBackdrop: true, // background shadow
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.variableHija
    });

    dialogRef.afterClosed().subscribe(result => {
      // Lógica para manejar el valor devuelto por el diálogo hijo
      console.log('Valor devuelto del diálogo hijo:', result);
      this.variableDelHijo.emit(result);
      // Aquí puedes realizar cualquier acción necesaria con el valor devuelto
    });
  }
}