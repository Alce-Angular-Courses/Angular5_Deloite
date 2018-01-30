import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
  { path: '', component: TareasComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TareasComponent
  ],
  exports: [
    TareasComponent
  ]
})
export class TareasModule { }
