import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {

  @Input() appResaltar: string;

  constructor(public elem: ElementRef) {}

  ngOnInit() {
    console.log(this.elem);
    this.elem.nativeElement.innerHTML += ` <b>${this.appResaltar}</b>`;
    this.elem.nativeElement.style = 'background-color : red';
  }

  @HostListener ('click')
  cambiarColor() {
    this.elem.nativeElement.style = 'background-color : yellow';
  }

}


@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {

  // Aplicada sobre cualquier elemnto del DOM, y en función del valor de atributo indicado
  // - aplicará un color de fondo
  // - añadirá un texto con el valor del atributo
  // - alternara entre dos diferentes colores de fondo al hacer clic sobre el elmento

  @Input() appDestacar: string;
  esColorInicial: boolean;
  aColores: Array<string>;

  constructor(private eTarget: ElementRef) {
    // eTarget es el elemento al que se aplica la directiva
    // que es inyectado el aquella.
    // Equivale a $('selector') sobre el elemento
    // siendo su propiedad nativelement el elemento en si
    // console.dir(this.eTarget.nativeElement);
  }

  ngOnInit () {
    this.aColores = ['yellow', 'purple'];
    this.esColorInicial = true;
    this.appDestacar = ` <em>${this.appDestacar}</em>`;
    this.eTarget.nativeElement.innerHTML += this.appDestacar;
    this.aplicarColor();
  }

  @HostListener('click') cambiaColor() {
    this.esColorInicial = !this.esColorInicial;
    this.aplicarColor();
  }

  aplicarColor () {
   // console.log("Has hecho click")
   if (this.esColorInicial){
    this.eTarget.nativeElement.style.backgroundColor = this.aColores[0];
    this.eTarget.nativeElement.style.color = this.aColores[1];
   } else {
      this.eTarget.nativeElement.style.backgroundColor = this.aColores[1];
      this.eTarget.nativeElement.style.color = this.aColores[0];
   }
  }
} // Fin de la clase DestacarDirective

