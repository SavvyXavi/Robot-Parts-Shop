import { Injectable, computed } from '@angular/core';
import { Product } from '../models/product';
import { httpResource, HttpResourceRef } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private resource: HttpResourceRef<Product[] | undefined> = httpResource(() => '/api/products');
  
  getProducts() {
    return computed(() => this.resource.value() ?? []);
  }
}
