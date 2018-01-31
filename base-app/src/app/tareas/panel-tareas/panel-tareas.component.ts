import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-tareas',
  templateUrl: './panel-tareas.component.html',
  styleUrls: ['./panel-tareas.component.css']
})
export class PanelTareasComponent implements OnInit {
  public titulo: string;
  aTareas: Array<string>;
  sTarea: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Lista de Tareas';
    // si existe se extrae de localStorage
    if (localStorage.getItem('tareas')) {
      this.aTareas = JSON.parse(localStorage.getItem('tareas'));
    } else {
      this.aTareas = [];
    }
  }

  // respuesta a los eventos en el componente item
  addTarea (sTarea) {
    this.aTareas.push(sTarea);
    this.actualizaStorage();
  }

  // respuesta a los eventos en el componente lista
  deleteTarea (i) {
    this.aTareas.splice(i, 1);
    this.actualizaStorage();
  }

  private actualizaStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }

}
