import { Component, OnInit } from '@angular/core';
import { LibroInterface } from '../../models/libro.interface';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  libroList: LibroInterface[] = [];

  constructor(private serviceService: ServiceService) { }

  ngOnInit()  {

    this.serviceService.getLibros().subscribe((data : any) => {

      const results: LibroInterface[] = data.data.libros;
      console.log(data);
      console.log(results);
      const formattedResults = results.map(({ _id, name, Image, age, typeText, description}) => ({
        _id,
        name,
      typeText,
      age,
      Image,
      description

      }));
      console.log(formattedResults)
      this.libroList = formattedResults;
  })
}

}

