import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], arg: any): any {
    if (!values) {
      return [];
    }
    return values.map(item => item[arg])
      .filter(x => x)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
}
