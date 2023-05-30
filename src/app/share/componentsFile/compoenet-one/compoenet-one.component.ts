import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compoenet-one',
  templateUrl: './compoenet-one.component.html',
  styleUrls: ['./compoenet-one.component.css'],
})
export class CompoenetOneComponent {
  @Output() valorEnviado: EventEmitter<string> = new EventEmitter<string>();
  miValor: string = '';

  enviarValor() {
    // const valor = 'Hola desde el emisor';
    this.valorEnviado.emit(this.miValor);
  }
}
