import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasListComponent } from './citas-list/citas-list.component';
import { CitaEditComponent } from './cita-edit/cita-edit.component';
import { CitasComponent } from './citas/citas.component';
import { CitasRoutingModule } from './citas/citas-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CitasListComponent,
    CitaEditComponent,
    CitasComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule
  ]
})
export class CitasModule { }
