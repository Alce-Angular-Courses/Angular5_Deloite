import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza/cabeza.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { IdiomaComponent } from './idioma/idioma.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    CabezaComponent,
    PieComponent,
    MenuComponent,
    IdiomaComponent
  ],
  exports : [
    CabezaComponent,
    PieComponent,
    MenuComponent
  ]
})
export class SharedModule { }
