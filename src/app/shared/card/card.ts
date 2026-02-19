import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  pacientes =[
    {
      id:1,
      nombre:"Donna",
      raza: "Pequines",
      color:"blanco",
      diagnostico: "Esterilizacion de mascota",
      estado:true
    },
    {
      id:1,
      nombre:"LOOKY",
      raza: "Pequines",
      color:"blanco",
      diagnostico: "recuperacion de deshidratacion",
      estado:true
    },
    {
      id:1,
      nombre:"ROKO",
      raza: "Pequines",
      color:"blanco",
      diagnostico: "Recuperacion de operacion",
      estado:false
    }
  ]

}
