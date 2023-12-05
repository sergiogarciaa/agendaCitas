import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citas, datosCitas } from 'src/app/modelos/citas';
import { Clientes } from 'src/app/modelos/clientes';
import { CitasService } from 'src/app/servicios/citas.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.css']
})
export class CitasListComponent {
  citas: any;
  datosCitas?: datosCitas;
  arrayCitas: datosCitas[] = [];

  constructor(
    private fbs: FirebaseService,
    private citaServ: CitasService
  ) { }

  ngOnInit() {
     // Leer las citas con fbs
     this.fbs.coleccion = 'citas';
     this.fbs.queryDocument('citas', true)
       .subscribe(res => {
         this.citas = res;
         console.log(res);
 
         this.citas.forEach((element: Citas) => {
           // Buscar datos del cliente
           this.fbs.coleccion = 'clientes';
           this.fbs.getDocument(element.id!).subscribe(dataCliente => {
             const cliente = dataCliente;
 
             // A partir de aquí, montar el objeto datosCitas
             this.datosCitas = {
               citas: element,
               usuario: cliente
             };
 
             this.arrayCitas.push(this.datosCitas);
             console.log(this.arrayCitas);
 
             // Aquí puedes realizar más operaciones con los datos obtenidos
 
          });
        });
      });
  }
}
