import { Component, OnInit } from '@angular/core';
import { AutorInterface } from '../../models/autor.interface';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  autorList: AutorInterface[] = [];

  constructor(private serviceService: ServiceService) { }

  ngOnInit(){


    this.serviceService.getAutores().subscribe((data : any) => {



      const results: AutorInterface[] = data.data.autores;
      console.log(data);

      const formattedResults = results.map(({ _id, name, Image, gender, typeText, descripcion, libros }) => ({
        _id,
        Image,
        name,
        gender,
        typeText,
        descripcion,
        libros
      }));
      console.log(formattedResults)
      this.autorList = formattedResults;

    })
  }

}
