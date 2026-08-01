import { Component, signal, input } from '@angular/core';
import { Product } from '../models/product';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../services/cart';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  product = input.required<Product>();
  availableInventory = signal(3);

  constructor(private cartService: CartService) {}

  getImageUrl() {
    return '/images/robot-parts/' + this.product().imageName
  }

  addToCart(event: MouseEvent) {
    setTimeout(() => this.availableInventory.update((p) => p - 1), 100)
    this.cartService.addToCart(this.product());
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0}
  }
}
