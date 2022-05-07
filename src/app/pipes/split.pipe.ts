import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  transform(val: string, delimiter: string, idx = 0): string {
    return val.split(delimiter)[idx];
  }
}
