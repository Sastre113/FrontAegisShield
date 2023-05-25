import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AegisShield';
  variablePadre: string;
  datoRecibidoDelHijo: any;

  constructor(){
    this.variablePadre = 'valor de la variable padre';
  }

  recibir(dato: string) {
    this.datoRecibidoDelHijo = dato;
  }
}
