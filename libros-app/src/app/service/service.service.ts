import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:4000/';
const autoresUrl = baseUrl + 'autor';
const librosUrl = baseUrl + 'libro';
const autorByIdUrl = baseUrl + 'autor/';
const libroByIdUrl = baseUrl + 'libro/';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  getAutores() {
    return this.http.get(autoresUrl);
  }
  getLibros() {
    return this.http.get(librosUrl);
  }
  getAutoresById (id: any) {
    return this.http.get(autorByIdUrl+id);
  }
  getLibrosById (id: any) {
    return this.http.get(libroByIdUrl+id);
  }
}

