import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(text: string): any {
    return text.substring(0, 1).toUpperCase() + text.substring(1);
  }

}
