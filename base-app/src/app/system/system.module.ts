import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResaltarDirective, DestacarDirective } from './resaltar.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResaltarDirective,
    DestacarDirective,
  ],
  exports: [
    ResaltarDirective,
    DestacarDirective
  ]
})
export class SystemModule { }
