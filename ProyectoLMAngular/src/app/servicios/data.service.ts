import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogo, Producto } from '../common/catalogo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCatalogo(): Observable<any>{
    return this.http.get<Catalogo>('data/data.json')
  }
  
  getCatalogoById(id: string): Observable<Producto>{
    return this.getCatalogo()
    .pipe(map(catalogo=>{
      const producto = catalogo.productos
      .find((producto: { nombre: string; }) => producto.nombre === id);
      if(!producto){
        throw new Error('No se ha encontradi el producto con el id' + id);
      }
      return producto;
    }))
  }
}
