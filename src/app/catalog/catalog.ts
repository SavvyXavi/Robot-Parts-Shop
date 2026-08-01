import { Component, Signal } from '@angular/core';
import { ProductDetails } from "../product-details/product-details";
import { ProductsService } from '../services/products';
import { Product } from '../models/product';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  products!: Signal<Product[]>;
  
  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();

    }

}
