import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';

export const routes: Routes = [
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'catalog', component: Catalog },
    { path: 'cart', component: Cart},
];
