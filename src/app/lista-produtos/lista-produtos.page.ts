import { Component , OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit{
 
  ngOnInit() {
  }

  constructor (
    private navCtrl: NavController
  ) {}

  public produtos = [
    {
      id: 1,
      imagem: '../assets/images/mouse.jpg',
      titulo: 'Mouse', 
      descricao: 'Um dispositivo de entrada para computadores.' 
    },
    { 
      id: 2,
      imagem: '../assets/images/teclado.webp',
      titulo: 'Teclado', 
      descricao: 'Um dispositivo de entrada para inserir texto em um computador.' 
    },
    { 
      id: 3,
      imagem: '../assets/images/monitor.avif',
      titulo: 'Monitor', 
      descricao: 'Um dispositivo de saída que exibe informações visuais geradas por um computador.' 
    },
  ]

  showDescricaoProdutos(id: any) {
    this.navCtrl.navigateForward("descricao-produtos/id/"+id);
  }
}
