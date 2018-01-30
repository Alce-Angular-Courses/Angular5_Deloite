import { Component, OnInit,
  trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
  animations: [
    trigger('botonState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.2)'
      })),
      transition('inactive=>active', animate('500ms ease-in')),
      transition('active=>inactive', animate('500ms ease-out')),
      ])
  ]
})
export class BotonComponent implements OnInit {

  public boton: {state: string, label: string};

  constructor() { }

  ngOnInit() {
    this.boton = {state: 'inactive', label: 'Activar'};
  }
  cambiarEstado () {
    this.boton.state =
      this.boton.state === 'active' ? 'inactive' : 'active';
    this.boton.label =
      this.boton.label === 'Activar' ? 'Desactivar' : 'Activar';
  }
}
