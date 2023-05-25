import {Component, Inject } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'modal-custom-dialog',
  styleUrls: ['modal-custom-dialog.css'],
  templateUrl: 'modal-custom-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ModalCustomDialog {
  variableHijadeHija: string;

  constructor(@Inject(MAT_DIALOG_DATA) public variableHija: any, public dialogRef: MatDialogRef<ModalCustomDialog>) {

    this.variableHijadeHija = variableHija;
    console.log(this.variableHijadeHija);
  }

  onAceptar():void {
    this.dialogRef.close("Esto va hacia el padre"); 
  }
}