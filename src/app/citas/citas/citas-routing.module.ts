import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './citas.component';
import { CitaEditComponent } from '../cita-edit/cita-edit.component';
import { CitasListComponent } from '../citas-list/citas-list.component';

const routes: Routes = [
  {
    path: '', component: CitasComponent, children: [
      { path: 'listado-citas', component: CitasListComponent },
      { path: 'edit-cita/:id', component: CitaEditComponent },
      { path: 'new-cita', component: CitaEditComponent },
      { path: '', redirectTo: 'listado-citas', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
