import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  constructor() {

  }

  addToCart(product: Product) {
    this.cart.update(cart => [...cart, product]);
  }

  removeFromCart(product: Product) {
    this.cart.update(cart => cart.filter(p => p.id != product.id));
  }
}
