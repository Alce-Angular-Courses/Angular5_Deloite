import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResaltarDirective, DestacarDirective } from './resaltar.directive';
import { TruncarPipe } from './truncar.pipe';
import { CapitalizarPipe } from './capitalizar.pipe';
import { TitularizarPipe } from './titularizar.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResaltarDirective,
    DestacarDirective,
    TruncarPipe,
    CapitalizarPipe,
    TitularizarPipe,
  ],
  exports: [
    ResaltarDirective,
    DestacarDirective,
    TruncarPipe,
    CapitalizarPipe,
    TitularizarPipe
  ]
})
export class SystemModule { }
