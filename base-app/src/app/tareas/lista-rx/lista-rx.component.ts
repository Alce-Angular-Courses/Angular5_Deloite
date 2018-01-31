import { Component, OnInit} from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-lista-rx',
  templateUrl: './lista-rx.component.html',
  styleUrls: ['./lista-rx.component.css']
})
export class ListaRxComponent implements OnInit {

  sTitle: string;
  sEtiquetaBtn: string;
  aItems: Array<any>;

  constructor(public store: StoreService) {}

  ngOnInit() {
    this.sTitle = 'Lista de Items';
    this.sEtiquetaBtn = 'Eliminar';
    this.aItems = this.store.getDatos();
    // TODO: Con posterioridad a inicializar el array de tareas
    // cuando haya cambios en el store
    // debe actualizarse la lista
  }

  deleteItem(i) {
    this.store.deleteDato(i);
    // TODO: Tras eliminar una tarea del Store
    // debe actualizarse la lista
  }
}
