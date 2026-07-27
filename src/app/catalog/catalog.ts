import { Component } from '@angular/core';
import { ProductDetails } from "../product-details/product-details";
import { Products } from '../services/products';
import { Product } from '../models/product';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
products: Product[];
constructor(private productsService: Products) {
  this.products = this.productsService.getProducts();

}

ngOnInit() {
  this.products =
}
}
