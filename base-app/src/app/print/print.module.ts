import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router/';
import { FormModelComponent } from './form-model/form-model.component';
import { FormVistaComponent } from './form-vista/form-vista.component';

const routes: Routes = [
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainComponent,
    FormVistaComponent,
    FormModelComponent
  ],
  exports: [
    MainComponent
  ]
})
export class PrintModule { }
