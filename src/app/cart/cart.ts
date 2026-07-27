import { Component } from '@angular/core';
import { CartItem } from "../cart-item/cart-item";
import { Product } from '../models/product';
import  allProducts  from '../products.json'
@Component({
  selector: 'bot-cart',
  imports: [CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartItems: Product[] = [allProducts[2], allProducts[4]];
}
