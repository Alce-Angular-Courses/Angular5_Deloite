import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Idioma } from './system/maestro.models';
import { IDIOMAS } from './system/maestro.datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  aIdiomas: Array<Idioma>;
  selectIdioma: Idioma;

  constructor (public translate: TranslateService) {

    this.aIdiomas = IDIOMAS;
    this.selectIdioma = {name: 'Español', code: 'es'};
    this.translate.use(this.selectIdioma.code);
  }

  selecionarIdioma() {
    this.translate.use(this.selectIdioma.code);
  }
}
