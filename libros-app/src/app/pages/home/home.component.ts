import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public welcome =[ {

    titulo:"Hola lectura",
        Image:"./assets/home/bibli.jpg",

      },
        ]


  constructor() { }

  ngOnInit(): void {
  }

}
