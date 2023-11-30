import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProdutosCadastrarComponent } from './components/produtos/produtos-cadastrar/produtos-cadastrar.component';
import { ProdutosListarComponent } from './components/produtos/produtos-listar/produtos-listar.component';
import { PesquisaCodbarraComponent } from './components/produtos/pesquisa-codbarra/pesquisa-codbarra.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'produtos', component: ProdutosListarComponent },
      { path: 'produtos/:id', component: ProdutosCadastrarComponent },
      { path: 'consultapreco', component: PesquisaCodbarraComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
