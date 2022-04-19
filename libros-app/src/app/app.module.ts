import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { ServiceService } from './service/service.service'
import { HttpClientModule } from '@angular/common/http';
import { AutoresDetailsComponent } from './pages/autores-details/autores-details.component';
import { librosDetailsComponent } from './pages/libros-details/libros-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './pages/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutoresComponent,
    LibrosComponent,
    HomeComponent,
    FooterComponent,
    AutoresDetailsComponent,
    librosDetailsComponent,
    FormularioComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
