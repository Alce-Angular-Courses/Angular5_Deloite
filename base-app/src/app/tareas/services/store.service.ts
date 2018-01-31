import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  aDatos: Array<any>;

  constructor() {
    // if (localStorage.getItem('items')) {
    //  this.aDatos = JSON.parse(localStorage.getItem('items'));
    // } else {
      this.aDatos = [];
    // }
   }

   getDatos() {
     return this.aDatos;
   }

   setDato(dato: any) {
    this.aDatos.push(dato);
   }

   deleteDato(i: number) {
    this.aDatos.splice(i, 1);
   }

   // private actualizaStorage() {
   // localStorage.setItem('items', JSON.stringify(this.aDatos));
   // }
}
