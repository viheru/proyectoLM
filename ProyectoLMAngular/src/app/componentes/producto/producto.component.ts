import { Component, OnInit } from '@angular/core';
import { Producto } from '../../common/catalogo';
import { DataService } from '../../servicios/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-producto',
  imports: [RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  
  constructor(
    private dataservice: DataService,
    private activerouted: ActivatedRoute,
    private route: ActivatedRoute
  ){}

  productoONE?: Producto;
  ngOnInit(): void {
    this.loadProductoONE();

  }
  loadProductoONE(){
    const id = this.activerouted.snapshot.params['nombre'];

    this.dataservice.getCatalogoById(id).subscribe(
      {
        next: (data)=>{
          this.productoONE = data;
          console.log(this.productoONE);
        },
        error: (error)=>{
          console.log('No se ha podido encontrar el producto con el nombre por' + error);
        },
        complete: ()=>{
          console.log('El proceso de adquirir el producto se ha completado correctamente')
        }
      }
    )  
  }
  
  //producto ={
    //nombre: 'Camiseta Basica',
    //descripcion: 'Camiseta de algodón 100% con diseño clásico.',
    //precio: '20.00€',
    //stock: '10'
  //}
 
}

