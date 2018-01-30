import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titularizar'
})
export class TitularizarPipe implements PipeTransform {

    transform(pTexto: string): any {
      if (pTexto.length === 0) {
        return pTexto;
      }
      const aCaracteres = pTexto.split('');
      aCaracteres[0] = aCaracteres[0].toUpperCase();

      for (let i = 0; i < aCaracteres.length - 2; i++) {
        if (aCaracteres[i] === ' ' ||
          aCaracteres[i] === '.' ||
          aCaracteres[i] === ',') {
          aCaracteres[i + 1] = aCaracteres[i + 1].toUpperCase();
        }
      }
  return aCaracteres.join('');
  }
}
