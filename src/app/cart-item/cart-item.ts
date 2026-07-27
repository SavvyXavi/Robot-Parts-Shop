import { Component, signal, input } from '@angular/core';
import { Product } from '../models/product';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'bot-cart-item',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  product = input.required<Product>();


  getImageUrl() {
    return '/images/robot-parts/' + this.product().imageName
  }

  removeFromCart() {
    
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0}
  }
}
