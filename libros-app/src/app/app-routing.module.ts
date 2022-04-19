import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { HammerModule } from '@angular/platform-browser';
import { LibrosComponent } from './pages/libros/libros.component';
import { AutoresDetailsComponent } from './pages/autores-details/autores-details.component';
import { librosDetailsComponent } from './pages/libros-details/libros-details.component';

const routes: Routes = [
  {path:'',pathMatch:"full", component: HomeComponent},
  {path:'footer', component:FooterComponent},
  {path:'header', component: HeaderComponent},
  {path:'formulario', component: FormularioComponent},
  {path:'autores', component: AutoresComponent},
  {path:'autores/:autoresID', component: AutoresDetailsComponent},
  {path:'home', component: HammerModule},
  {path:'libros', component: LibrosComponent},
  {path:'libros/:librosID', component: librosDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
