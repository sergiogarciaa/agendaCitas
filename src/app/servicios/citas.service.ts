import { Inject, Injectable } from '@angular/core';
import { FirebaseService} from './firebase.service';
import { Observable } from 'rxjs';
import { Citas, datosCitas } from '../modelos/citas';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  DatosCitas: datosCitas[] = [];
  citaSeleccionada: any;
  citas: Citas = {
    id: '',
    fechaCita: '',
    idUsuario: '',
};

// Este es el constructor de la clase.
  constructor(private fbs: FirebaseService) {}
  setCitas(citas: Citas[]) {
    citas.forEach((citas: Citas) => {
      // this.alquilerSeleccionado = {
      //   id: '',
      //   alquilado: true,
      //   alquiler: alquiler,
      // };
      this.fbs.coleccion = 'usuarios';
      this.fbs.getDocument(citas.idUsuario!).subscribe(user => {
        this.fbs.coleccion = 'juegos';
        this.fbs.getDocument(citas.id!).subscribe(idCita => {
          this.citaSeleccionada! = { id: '', alquilado: true, citas: citas, idUsuario:  user.id, juego: idCita.id};
          console.log(this.citaSeleccionada);
          //return this.alquilerSeleccionado;
        });
      });
    });
  }

  newCita(citas: Citas) {
    // Tomar lo necesario y guardar
    
  }
}

