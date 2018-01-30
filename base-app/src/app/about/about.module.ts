import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AboutComponent,
    InfoComponent
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
