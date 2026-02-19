import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  imports: [],
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {

  subtitulo: string = "Cuidamos de los que mas quieres con servicios de alta calidad";

  //Variable para seleccionar un servicio
  serviciosSeleccionado: string = "ninguno";

  servicios = [
    {
      id: 1,
      nombre: "Consulta general",
      descripcion: "Evaluacion completa de salud y signos vitales",
      imagen: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg", 
      activo: true
    },
    {
      id: 2,
      nombre: "Estetica",
      descripcion: "La imagen de tu mascota en las mejores manos",
      imagen: "https://cdn.pixabay.com/photo/2022/05/04/15/42/dog-7174266_1280.jpg",
      activo: true
    },
    {
      id: 3,
      nombre: "Cirugia",
      descripcion: "Tratamiento quirigico de calidad",
      imagen: "https://cdn.pixabay.com/photo/2019/02/25/17/51/animals-4020199_1280.jpg",
      activo: false
    }
  ];

  //arreglo para filtrar los servicios
  serviciosFiltrados = this.servicios;

  //Funcion para mostrar el servicio seleccionado
  seleccionar(nombre: string) {
    this.serviciosSeleccionado = nombre;

  }

  //funcion buscar servicos
  busqueda(event : Event){
    //Extrae el valor del input
    const valorBuscar = (event.target as HTMLInputElement).value;

    //cambiar subtitulo
    this.subtitulo =`Resultados para: ${valorBuscar}`;
    //filtrar el arreglo original del servicio
    this.serviciosFiltrados = this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valorBuscar.toLowerCase())
    )

  }

}
