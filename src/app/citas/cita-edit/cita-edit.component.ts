import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citas } from 'src/app/modelos/citas';
import { Clientes } from 'src/app/modelos/clientes';
import { CitasService } from 'src/app/servicios/citas.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-cita-edit',
  templateUrl: './cita-edit.component.html',
  styleUrls: ['./cita-edit.component.css']
})
export class CitaEditComponent {
  public cita: any;
  nuevo = true;
  citas: Citas[] = [];
  clientes: Clientes[] = [];

  constructor(
    private citasServ: CitasService,
    private afs: FirebaseService,
    private rutaActiva: ActivatedRoute
  ) {
    this.cita = this.cita.Citas;
  }


  ngOnInit() {
    if (this.rutaActiva.snapshot.paramMap.get('id')) {
      // Hay id, cargar la cita
      this.afs.coleccion = 'citas';
      const id = this.rutaActiva.snapshot.paramMap.get('id') || '';
      this.afs.getDocument(id).subscribe(res => this.cita = res);
    } else {
      // No hay id, nuevo alquiler
    }
    // cargar los usuarios
    this.afs.coleccion = 'clientes';
    this.afs.getCollection().subscribe(
      resUser => { this.clientes = resUser; console.log('dame los clientes') }
    );
  }
  // Nueva cita
  nuevaCita() {
    console.log(this.cita);
    this.afs.coleccion = 'citas';
    this.afs.addDocument(this.cita)
      .then(() => alert('cita creada'))
      .catch(error => console.error(error));
  }
}
