import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  private baseURL = 'http://localhost:8080';
  private shopsURL = this.baseURL + '/rest/catalog/shops';
  private categoriesURL = this.baseURL + '/rest/catalog/categories';
  private productsURL = this.baseURL + '/rest/catalog/products';

  constructor(private httpClient: HttpClient) { }

  private parse(response: any, key: string): any[] {
    return response._embedded[key];
  }

  private getId(href: string){
    return href.substring(href.lastIndexOf('/' + 1));
  }

  getProducts(href:string = this.productsURL){
    return this.httpClient.get(href).pipe(
      map(response => this.parse(response, 'products')
      ),
      map(products => products.map(product => {
        product.id = this.getId(product._links.product.href);
        return product;
      })),
      switchMap(products =>
        forkJoin(products.map(
          product => this.setShop(product))
        )
      )
    );
  }

  private setShop(product: any) {
    return this.httpClient.get(product._links.shop.href).pipe(map((shop: any) => {
      product.shop = {
        id: this.getId(shop._links.self.href),
        name: shop.name
      };
      return product;
    }));
  }

  getShops() {
    return this.httpClient.get(this.shopsURL).pipe(
      map(response => this.parse(response, 'shops')),
      map((shops: any[]) => shops.map(shop => {
        shop.id = this.getId(shop._links.shop.href);
        return shop;
      }))
    );
  }

  getCategories(parentId: number = 0) {
    const url = this.categoriesURL + `/${parentId}/subCategories`;
    return this.httpClient.get(url).pipe(
      map(response => this.parse(response, 'categories')),
      map(categories => categories.map (category => {
        category.id = this.getId(category._links.category.href);
        return category;
      }))
    );
  }
}
