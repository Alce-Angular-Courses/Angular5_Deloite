import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Modulos de la aplicación
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SystemModule } from './system/system.module';
// Modulos de terceros
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
// Componentes
import { AppComponent } from './app.component';
/* import { InicioModule } from './inicio/inicio.module';
import { TareasModule } from './tareas/tareas.module';
import { AboutModule } from './about/about.module'; */
import { CatalogoModule } from './catalogo/catalogo.module';
// Configuracion LOCALE
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HttpModule, Http } from '@angular/http';
// Servicios de la aplicacion
import { BookService } from './services/book.service';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ChartsModule,
    TranslateModule.forRoot(
      {
      provide: TranslateLoader,
      useFactory: tralationFactory,
      deps: [Http]
      }
    ),
    AppRoutingModule,
    SharedModule,
    SystemModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    BookService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tralationFactory(http: Http) {
  return new TranslateStaticLoader(
    http, '/assets/i18n', '.json');
}
