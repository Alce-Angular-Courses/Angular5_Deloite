import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { PanelComponent } from './panel/panel.component';
import { SystemModule } from '../system/system.module';
import { BotonComponent } from './boton/boton.component';
import { RouterModule, Routes } from '@angular/router/';
import { RxComponent } from './rx/rx.component';

const routes: Routes = [
  {path: '', component: InicioComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    SystemModule
  ],
  declarations: [
    InicioComponent,
    DashboardComponent,
    PanelComponent,
    BotonComponent,
    RxComponent
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
