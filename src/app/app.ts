import { Component, OnInit, signal } from '@angular/core';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { initFlowbite } from 'flowbite';
import { Fooder } from "./shared/fooder/fooder";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavBar, Fooder, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }
  
}
