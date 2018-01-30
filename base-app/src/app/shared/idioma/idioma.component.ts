import { Component, OnInit } from '@angular/core';
import { IDIOMAS } from '../../system/maestro.datos';
import { Idioma } from '../../system/maestro.models';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

  aIdiomas: Array<Idioma>;
  selectIdioma: Idioma;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.aIdiomas = IDIOMAS;
    this.selectIdioma = {name: 'Español', code: 'es'};
    this.translate.use(this.selectIdioma.code);

  }

  selecionarIdioma() {
    this.translate.use(this.selectIdioma.code);

  }
}
