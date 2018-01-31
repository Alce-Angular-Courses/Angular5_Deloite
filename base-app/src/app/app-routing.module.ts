import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/guard.service';

const routes: Routes = [
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule', canActivate: [AuthGuard]},
  { path: 'catalogo/*', loadChildren: './catalogo/catalogo.module#CatalogoModule'},
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
