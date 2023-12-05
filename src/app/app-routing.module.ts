import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasListComponent } from './citas/citas-list/citas-list.component';
import { CitaEditComponent } from './citas/cita-edit/cita-edit.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { ClienteDetailComponent } from './clientes/cliente-detail/cliente-detail.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routes: Routes = [
/*  { path: '', redirectTo: '/citas', pathMatch: 'full' },
  { path: 'citas', component: CitasListComponent },
  { path: 'citas/edit/:id', component: CitaEditComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/:id', component: ClienteDetailComponent },
  */
  
  { path: '', component: BienvenidaComponent },
  { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)},
  { path: 'citas', loadChildren: () => import('./citas/citas.module').then(m => m.CitasModule)},
  //{ path: 'juegos', loadChildren: () => import('./vistas/juegos/juegos.module').then(m => m.JuegosModule)},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
