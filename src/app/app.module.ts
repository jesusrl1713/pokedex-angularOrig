import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ngrx
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/control/app.component';
import { VistaPrincComponent } from './components/main/vista-princ/vista-princ.component';
import { VistaDetalleComponent } from '../app/components/main/vista-detalle/vista-detalle.component';
import { VistaPerfilComponent } from '../app/components/main/vista-perfil/vista-perfil.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    VistaPrincComponent,
    VistaDetalleComponent,
    VistaPerfilComponent,
    HeaderComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //StoreModule.forRoot({ contador: contadorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
