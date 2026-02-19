import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-paciente',
  imports: [],
  templateUrl: './detalle-paciente.html',
  styleUrl: './detalle-paciente.css',
})
export class DetallePaciente {

  //indicar que el componente padre va a enviar informacion
  //el signo ? indica que la mascota es opcional
  @Input() mascota?: Mascota;

  //enviar un evento al componente padre
  //creamos el evento notificar accion
  @Output() notificarAccion = new EventEmitter<string>();

  //funcion que se va a activar con un click en el boton del componente hijo
  //definir que hace el evento notificar accion
  avisarIngreso(): void {
    if (this.mascota) {
      this.notificarAccion.emit(
        `El paciente ${this.mascota.nombre} ha ingresado a consulta`
      )
    }
  }

}
