import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-rx',
  templateUrl: './panel-rx.component.html',
  styleUrls: ['./panel-rx.component.css']
})
export class PanelRxComponent implements OnInit {

  public titulo: string;

  constructor() {}

  ngOnInit() {
    this.titulo = 'Lista de Tareas Rx';
    // si existe se extrae de localStorage
  }
}
