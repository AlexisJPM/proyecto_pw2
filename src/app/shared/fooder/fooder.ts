import { Component } from '@angular/core';

@Component({
  selector: 'app-fooder',
  imports: [],
  templateUrl: './fooder.html',
  styleUrl: './fooder.css',
})
export class Fooder {

  anio: number = new Date().getFullYear();

  logoUrl:string="/images/dog.png";

  enlaces= [
    {nombre:'Home', link:'#'},
    {nombre:'Acerca', link:'#'},
    {nombre:'Mascotas', link:'#'},
    {nombre:'Contato', link:'#'},
    {nombre:'Registro', link:'#'},

  ]

}
