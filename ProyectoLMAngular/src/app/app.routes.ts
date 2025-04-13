import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'producto/:nombre', component: ProductoComponent},
    {path: 'pago', component: PagoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'iniciosesion', component: IniciosesionComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
