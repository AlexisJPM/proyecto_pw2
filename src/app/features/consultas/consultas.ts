import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DetallePaciente } from "../../shared/detalle-paciente/detalle-paciente";

@Component({
  selector: 'app-consultas',
  imports: [DetallePaciente],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {

  mascotas = [
    {
      id: 1,
      nombre: "Donna",
      especie: "Canino",
      historial: "vacunas al dia"
    },
    {
      id: 2,
      nombre: "ROKO",
      especie: "FELINO",
      historial: "Requiere desparacitacion"
    },
    {
      id: 3,
      nombre: "VALERIA",
      especie: "ROEEDOR",
      historial: "Requiere rehabilitacion"
    }
  ];

  mascotaSeleccionada: Mascota | null = null;

  mensajeAviso: string = ''

  //funcion que se ejcuta cuando el usuario de click en 'verficha'

  verDetalles(mascota: Mascota) {
    this.mascotaSeleccionada = mascota;

  }

  //funcion encargada de gestionar el evento personalizado que viene del hijo (detalles-pacientes)
  procesarAviso(mensaje: string) {
    this.mensajeAviso = mensaje;
  }

}
