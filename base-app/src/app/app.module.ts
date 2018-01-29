import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulos de la aplicación
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// Componentes
import { AppComponent } from './app.component';
import { InicioModule } from './inicio/inicio.module';
import { TareasModule } from './tareas/tareas.module';
import { AboutModule } from './about/about.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    InicioModule,
    TareasModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
