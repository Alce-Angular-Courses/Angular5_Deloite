import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StoreService {
  aDatos: Array<any>;
  aDatos$: Subject<any[]>;

  constructor() {
    // if (localStorage.getItem('items')) {
    //  this.aDatos = JSON.parse(localStorage.getItem('items'));
    // } else {
      this.aDatos = [];
      this.aDatos$ = new Subject<any[]>();
    // }
   }

   getSubjectDatos() {
     return this.aDatos$;
   }

   updetaSubjectDatos() {
    this.aDatos$.next( this.aDatos );
   }

   setDato(dato: any) {
    this.aDatos.push(dato);
    // this.aDatos$.next( this.aDatos );
    // actualizaStorage();
   }

   deleteDato(i: number) {
    this.aDatos.splice(i, 1);
    // this.aDatos$.next( this.aDatos );
    // actualizaStorage():
   }


   // private actualizaStorage() {
   // localStorage.setItem('items', JSON.stringify(this.aDatos));
   // }
}
