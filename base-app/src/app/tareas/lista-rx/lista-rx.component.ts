import { Component, OnInit} from '@angular/core';
import { StoreService } from '../services/store.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lista-rx',
  templateUrl: './lista-rx.component.html',
  styleUrls: ['./lista-rx.component.css']
})
export class ListaRxComponent implements OnInit {

  sTitle: string;
  sEtiquetaBtn: string;
  aItems: Array<any>;
  aItems$: any;
  // aItems$: Observable<any[]>;

  constructor(public store: StoreService) {}

  ngOnInit() {
    this.sTitle = 'Lista de Items';
    this.sEtiquetaBtn = 'Eliminar';
    this.aItems$ = this.store.getSubjectDatos();
    // TODO: Con posterioridad a inicializar el array de tareas
    // cuando haya cambios en el store
    // debe actualizarse la lista
    this.aItems$.subscribe(
      (data) => this.aItems = data
    );
    this.store.updetaSubjectDatos();
  }

  deleteItem(i) {
    this.store.deleteDato(i);
    // TODO: Tras eliminar una tarea del Store
    // debe actualizarse la lista
  }
}
