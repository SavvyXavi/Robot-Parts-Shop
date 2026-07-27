import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import allProducts from '../products.json';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts(): Product[] {
    return allProducts
  }
}
