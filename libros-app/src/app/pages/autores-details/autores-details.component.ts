import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorInterface } from '../../models/autor.interface';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-autores-details',
  templateUrl: './autores-details.component.html',
  styleUrls: ['./autores-details.component.scss']
})
export class AutoresDetailsComponent implements OnInit {
  public autor: any;


  constructor(private route: ActivatedRoute, private serviceService: ServiceService) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params =>{
    const autoresID = String(params.get("autoresID"))

    //this.autores= autorList.find( (sigleautores: any) => autoresID === sigleautores.id)
    this.serviceService.getAutoresById(autoresID).subscribe((data : any) => {
      const results: AutorInterface[] = data.data.autores;
      console.log(data);
      console.log(results);
      this.autor = results;
      console.log("this.autor");
      console.log(this.autor);
    })
  })

    }


}
