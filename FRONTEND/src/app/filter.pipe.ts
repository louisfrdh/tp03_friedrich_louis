import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(observableProducts: Observable<Product[]>, filter: string) {
    // return observableProducts.map(products => products.filter(product => product.team.includes(filter)));
    // return observableProducts.pipe( map((items: Array<Product>) => items.filter(item => item.team.toLowerCase().indexOf(filter) > -1)) )
    return observableProducts.pipe( map((products: Array<Product>) => products.filter(product => product.team.toLowerCase().indexOf(filter) > -1)) );
    // return observableProducts.pipe( map((products: Array<Product>) => {
    //   products.filter(product => product.team.toLowerCase().indexOf(filter) > -1);
    //   return products.map(product => product);
      
    // }));
  }
}
