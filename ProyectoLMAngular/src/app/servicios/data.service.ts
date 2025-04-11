import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogo } from '../common/catalogo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCatalogo(): Observable<any>{
    return this.http.get<Catalogo>('data/data.json')
  }
}
