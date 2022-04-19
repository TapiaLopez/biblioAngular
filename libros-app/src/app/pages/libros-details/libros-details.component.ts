import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroInterface } from '../../models/libro.interface';



@Component({
  selector: 'app-libros-details',
  templateUrl:'./libros-details.component.html',
  styleUrls: ['./libros-details.component.scss']
})
export class librosDetailsComponent implements OnInit {
  public libro: any;

  constructor(private route: ActivatedRoute,  private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const librosID = String(params.get("librosID"))

     this.serviceService.getLibrosById(librosID).subscribe((data : any) => {
      const results: LibroInterface[] = data.data.libros;
      console.log(data);
      console.log(results);
      this.libro = results;
      console.log("this.libro");
      console.log(this.libro);
    })

    })


}
}

