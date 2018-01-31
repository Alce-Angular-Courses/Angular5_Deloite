import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  template: `
  <div class="container mb-2">
    <div class="row align-items-center">
      <app-panel-tareas class="col-6 text-center"></app-panel-tareas>
      <app-panel-rx class="col-6 text-center"></app-panel-rx>
    </div>
  </div>
    `,
  styles: [],
  // tslint:disable-next-line:use-host-property-decorator
  host: { 'class' : 'main'}
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
