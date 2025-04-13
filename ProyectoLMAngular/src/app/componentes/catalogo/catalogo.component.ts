import { Catalogo } from '../../common/catalogo';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  imports: [RouterModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{
    catalogo! : Catalogo;
    constructor(private dataservice: DataService){}
    
    ngOnInit(): void {
      this.loadCatalogo();  
    }

    loadCatalogo(){
      this.dataservice.getCatalogo().subscribe(
        {
          next: (data)=>{
            console.log(data);
            this.catalogo = data;
          },
          error: (err)=>{
            console.error(err);
          },
          complete: ()=>{
            console.log("Carga del catalogo comoletada");
          }
        }
      )
    }
  }