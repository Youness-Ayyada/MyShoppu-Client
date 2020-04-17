import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ShopsComponent } from './components/shops/shops.component';
import {
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatIconModule,
  MatDividerModule,
  MatMenuModule
} from '@angular/material';


@NgModule({
  declarations: [ProductsComponent, ProductComponent, CategoriesComponent, ShopsComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class ContentModule { }
