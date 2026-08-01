import { Component, Signal } from '@angular/core';
import { CartItem } from "../cart-item/cart-item";
import { Product } from '../models/product';
import { CartService } from '../services/cart';

@Component({
  selector: 'bot-cart',
  imports: [CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartItems: Signal<Product[]>;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cart;
  }
}
