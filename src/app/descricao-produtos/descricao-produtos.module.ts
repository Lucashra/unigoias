import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescricaoProdutosPageRoutingModule } from './descricao-produtos-routing.module';

import { DescricaoProdutosPage } from './descricao-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescricaoProdutosPageRoutingModule
  ],
  declarations: [DescricaoProdutosPage]
})
export class DescricaoProdutosPageModule {}
