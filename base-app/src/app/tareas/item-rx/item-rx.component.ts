import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-item-rx',
  templateUrl: './item-rx.component.html',
  styleUrls: ['./item-rx.component.css']
})
export class ItemRxComponent implements OnInit {

  sItem: string;
  sEtiquetaInput: string;
  sEtiquetaBtn: string;
  // outAddTarea: EventEmitter<string>;

  constructor(public store: StoreService) {
    // this.outAddTarea = new EventEmitter();
  }

  ngOnInit() {
    this.sEtiquetaInput = 'Escribe una tarea';
    this.sEtiquetaBtn = 'Añadir';
  }

  addItem() {
    // TODO: Añadir una taraa
    // this.outAddTarea.emit(this.sItem);
    this.store.setDato(this.sItem);
    this.sItem = '';
  }

}
