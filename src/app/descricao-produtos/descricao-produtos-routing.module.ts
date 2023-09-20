import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescricaoProdutosPage } from './descricao-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: DescricaoProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescricaoProdutosPageRoutingModule {}
