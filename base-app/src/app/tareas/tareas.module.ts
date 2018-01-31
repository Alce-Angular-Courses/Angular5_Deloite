import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas.component';
import { RouterModule, Routes } from '@angular/router/';
import { ItemComponent } from './item/item.component';
import { ListaComponent } from './lista/lista.component';
import { PanelTareasComponent } from './panel-tareas/panel-tareas.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TareasComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TareasComponent,
    ItemComponent,
    ListaComponent,
    PanelTareasComponent
  ],
  exports: [
    TareasComponent
  ]
})
export class TareasModule { }
