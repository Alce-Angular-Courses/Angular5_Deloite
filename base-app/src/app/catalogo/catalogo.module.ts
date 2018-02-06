import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router/';
import { LibrosComponent } from './libros/libros.component';
import { FormsModule } from '@angular/forms';
import { GoogleBooksService } from '../services/google-books.service';

const routes: Routes = [
  { path: '', component: CatalogoComponent},
  { path: 'book/:id', component: DetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CatalogoComponent,
    DetailsComponent,
    LibrosComponent]
})
export class CatalogoModule { }
