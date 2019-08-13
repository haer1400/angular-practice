import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product-types/product';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {  }

  createDb(){
    const products = [
      { id: 11, name: 'IronOre' },
      { id: 12, name: 'CopperOre' },
      { id: 13, name: 'Coal' },
      { id: 14, name: 'Limestone' },
      { id: 15, name: 'CateriumOre' },
      { id: 16, name: 'CrudeOil' },
      { id: 17, name: 'RawQuartz' },
      { id: 18, name: 'Sulfur' },
      { id: 19, name: 'SAMOre' }
    ];
      return {products};
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}