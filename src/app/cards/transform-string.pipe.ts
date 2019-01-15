import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformString'
})
export class TransformStringPipe implements PipeTransform {
  transform(str): any {
    const firstPart = str.slice(0,1).toUpperCase();
    const secondPart = str.slice(1);
    const result = firstPart + secondPart;
    return result;
  }

}
