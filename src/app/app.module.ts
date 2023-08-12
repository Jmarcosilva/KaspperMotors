import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCarrosComponent } from './components/cadastro-carros/cadastro-carros.component';
import { CadastroClientesComponent } from './components/cadastro-clientes/cadastro-clientes.component';
import { CadastroVendasComponent } from './components/cadastro-vendas/cadastro-vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCarrosComponent,
    CadastroClientesComponent,
    CadastroVendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
