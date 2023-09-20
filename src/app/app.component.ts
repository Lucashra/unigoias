import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  produtos = [
    { titulo: 'Mouse', descricao: 'Um dispositivo de entrada para computadores.' },
    { titulo: 'Teclado', descricao: 'Um dispositivo de entrada para inserir texto em um computador.' },
    { titulo: 'Monitor', descricao: 'Um dispositivo de saída que exibe informações visuais geradas por um computador.' },
    // Adicione mais produtos conforme necessário
  ];
}
