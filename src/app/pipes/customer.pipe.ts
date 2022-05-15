import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customer'
})
export class CustomerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
