import { Component, inject, signal } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {
  private mascotaServicio = inject(PetService)
//es una variable reactiva, que se puede vigilar de manera automatica
//cada vez que cambia su valor, angular asbe que tiene que actualizar el html
  mascotas = signal<Pet[]>([]);

}
