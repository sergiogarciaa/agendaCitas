import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  mensaje: any;


  /**
  * Este es el constructor de la clase.
  * @param modal - El servicio de modales utilizado para abrir modales.
  */
  constructor(
    private modal: NgbModal
    ) {
    this.mensaje={'Gracias por utilizar nuestro servicio de alquiler de juegos': 'Bienveniodo'};

  }
}
