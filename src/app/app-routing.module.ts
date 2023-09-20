import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-produtos',
    loadChildren: () => import('./lista-produtos/lista-produtos.module').then( m => m.ListaProdutosPageModule)
  },
  {
    path: 'descricao-produtos',
    loadChildren: () => import('./descricao-produtos/descricao-produtos.module').then( m => m.DescricaoProdutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
