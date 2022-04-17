import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincComponent } from '../app/components/main/vista-princ/vista-princ.component';
import { VistaDetalleComponent } from '../app/components/main/vista-detalle/vista-detalle.component';
import { VistaPerfilComponent } from '../app/components/main/vista-perfil/vista-perfil.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '', component: HeaderComponent, children: [

  {path: 'inicio', component: VistaPrincComponent, data: {title: 'Bienvendo'}},
  {path: 'detalles/:name/:id', component: VistaDetalleComponent, data: {title: 'detalles'}},
  {path: 'usuario', component: VistaPerfilComponent, data: {title: 'usuario'}},

]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
