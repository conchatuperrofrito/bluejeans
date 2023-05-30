import { Component } from '@angular/core';

@Component({
  selector: 'app-compoenet-two',
  templateUrl: './compoenet-two.component.html',
  styleUrls: ['./compoenet-two.component.css'],
})
export class CompoenetTwoComponent {
  valorRecibido: string = '';

  capturarValor(valor: string) {
    this.valorRecibido = valor;
  }
}
