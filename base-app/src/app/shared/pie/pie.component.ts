import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public autor: string;
  public lugar: string;
  public fecha: Date;
  
  constructor() { }

  ngOnInit() {
    this.autor = 'Alejandro Cerezo';
    this.lugar = 'Deloitte';
    this.fecha = new Date();
  }

}
