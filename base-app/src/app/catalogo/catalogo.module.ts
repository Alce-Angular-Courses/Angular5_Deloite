import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
  { path: '', component: CatalogoComponent},
  { path: 'book/:id', component: DetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatalogoComponent, DetailsComponent]
})
export class CatalogoModule { }
