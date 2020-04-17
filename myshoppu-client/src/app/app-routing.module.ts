import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './content/components/products/products.component';
import { ShoppingCartComponent } from './core/Components/shoppingcart/shoppingcart.component';
import { CategoriesComponent } from './content/components/categories/categories.component';
import { ShopsComponent } from './content/components/shops/shops.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
