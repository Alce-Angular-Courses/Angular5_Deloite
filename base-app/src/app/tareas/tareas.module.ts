import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TareasComponent
  ],
  exports: [
    TareasComponent
  ]
})
export class TareasModule { }
