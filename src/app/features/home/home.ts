import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Card } from "../../shared/card/card";
import { Video } from '../../shared/video/video';
import { Servicos } from '../../shared/servicos/servicos';
import { Pacientes } from "../../shared/pacientes/pacientes";

@Component({
  selector: 'app-home',
  imports: [Hero, Card, Video, Servicos, Pacientes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
