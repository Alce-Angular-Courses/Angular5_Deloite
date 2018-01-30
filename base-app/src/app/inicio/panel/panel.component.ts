import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public texto: string;
  public titulo: string;
  constructor() { }

  ngOnInit() {
    this.texto = `Un Anillo para gobernarlos a todos.
    Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos en las tinieblas.`;
    this.titulo = 'el señor de los anillos';
  }

}
