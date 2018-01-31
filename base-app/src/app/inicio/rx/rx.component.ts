import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import {Observable, Observer } from 'rxjs/Rx';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {

  aDatos: Array<number>;
  constructor() { }

  ngOnInit() {

    this.aDatos = [2, 5, 3, 7, 4, 8, 6];

    Rx.Observable
    .from(this.aDatos)
    .map(x => x + 3)
    .subscribe(
      (x) => {console.log('Next: ' + x); }
    );


   /*  const observador = Rx-Observer.create(
      function onNext(x) { console.log('Next: ' + x); }, 
      function onError(err) { console.log('Error: ' + err); }, 
      function onCompleted() { console.log('Completed'); } 
    );  */
  }

}
