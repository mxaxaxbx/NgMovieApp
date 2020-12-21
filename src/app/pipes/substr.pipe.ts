import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(overview: string): string {
    const str = overview.substring(0, 130);
    return `${str}...`
  }

}
