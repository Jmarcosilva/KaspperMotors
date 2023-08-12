import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCarrosComponent } from './components/cadastro-carros/cadastro-carros.component';
import { CadastroClientesComponent } from './components/cadastro-clientes/cadastro-clientes.component';
import { CadastroVendasComponent } from './components/cadastro-vendas/cadastro-vendas.component';

const routes: Routes = [
  {path:"cadastroCarros",component:CadastroCarrosComponent},
  {path:"cadastroClientes", component:CadastroClientesComponent},
  {path:"cadastroVendas", component:CadastroVendasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
