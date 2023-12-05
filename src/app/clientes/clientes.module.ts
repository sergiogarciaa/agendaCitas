import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';



@NgModule({
  declarations: [
    ClientesListComponent,
    ClienteDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }
