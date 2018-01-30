import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { PanelComponent } from './panel/panel.component';
import { SystemModule } from '../system/system.module';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    SystemModule
  ],
  declarations: [
    InicioComponent,
    DashboardComponent,
    PanelComponent
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
