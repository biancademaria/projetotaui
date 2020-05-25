import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CidadesModule } from './cidades/cidades.module';
import { RouterModule, Routes } from '@angular/router';
import { CidadesPesquisaComponent } from './cidades/cidades-pesquisa/cidades-pesquisa.component';
import { CidadesService } from './cidades/cidades.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'cidades', component: CidadesPesquisaComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule,
    CoreModule, 
    CidadesModule
  ],
  providers: [CidadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
