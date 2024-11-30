import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit',
})
export class UnitPipe implements PipeTransform {
  transform(value: number, unit: string): unknown {
    if (value === null || value === undefined || isNaN(value)) return 'N/A';
    return value + ' ' + unit;
  }
}
