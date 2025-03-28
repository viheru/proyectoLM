import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { CatalogoComponent } from "./componentes/catalogo/catalogo.component";
import { ProductoComponent } from "./componentes/producto/producto.component";
import { PagoComponent } from "./componentes/pago/pago.component";
import { ContactoComponent } from "./componentes/contacto/contacto.component";
import { IniciosesionComponent } from "./componentes/iniciosesion/iniciosesion.component";
import { RegistroComponent } from "./componentes/registro/registro.component";
import { FooterComponent } from "./componentes/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, InicioComponent, CatalogoComponent, ProductoComponent, PagoComponent, ContactoComponent, IniciosesionComponent, RegistroComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoLMAngular';
}
