import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
    
  tienda = {
    NombreTienda: 'StreetWear',
    productos: [
      {
        id: 1,
        nombre: 'Camiseta Básica',
        descripcion: 'Camiseta de algodón 100% con diseño clásico.',
        precio: '20.00€',
        imagen: 'img/camiseta.webp'
      },
      {
        id: 2,
        nombre: 'Pantalón Chandal PSG',
        descripcion: 'Confeccionado en materiales cómodos y de alta calidad',
        precio: '35.00€',
        imagen: 'img/panatalon.jpg'
      },
      {
        id: 3,
        nombre: 'Sudadera Nike Sportswear Club Crew',
        descripcion: 'Su diseño clásico y suave tejido fleece la hacen perfecta para el uso diario.',
        precio: '20.00€',
        imagen: 'img/chaqueta.jpg'
      },
      {
        id: 4,
        nombre: 'Sudadera Oversized',
        descripcion: 'Comodidad sin esfuerzo con un toque urbano.',
        precio: '20.00€',
        imagen: 'img/sudadera.jpg'
      }
    ]
  }
}