import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit{
 
  ngOnInit() {
  }
  produtos = [
    {
      imagem: '../assets/images/mouse.jpg',
      titulo: 'Mouse', 
      descricao: 'Um dispositivo de entrada para computadores.' 
    },
    { 
      imagem: '../assets/images/teclado.webp',
      titulo: 'Teclado', 
      descricao: 'Um dispositivo de entrada para inserir texto em um computador.' 
    },
    { 
      imagem: '../assets/images/monitor.avif',
      titulo: 'Monitor', 
      descricao: 'Um dispositivo de saída que exibe informações visuais geradas por um computador.' 
    },
  ]
}
