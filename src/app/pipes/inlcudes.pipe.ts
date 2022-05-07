import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes',
})
export class IncludesPipe implements PipeTransform {
  transform(arr: string[], element: string): boolean {console.log('tgis raen')
    return arr.includes(element);
  }
}
