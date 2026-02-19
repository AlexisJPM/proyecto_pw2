import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  imports: [CommonModule, FormsModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes {
  
  filtro:string="";

  pacientes=[
    {
      nombre:"Donna",
      especie:"Canino",
      urgencia: "alta",
      recuperacion: 85
    },
    {
      nombre:"ROKO",
      especie:"FELINO",
      urgencia: "media",
      recuperacion: 40
    },
    {
      nombre:"VALERIA",
      especie:"ROEEDOR",
      urgencia: "baja",
      recuperacion: 10
    }
  ]

}
