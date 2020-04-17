import { Component, OnInit } from '@angular/core';
import { ProxyService } from 'src/app/core/services/proxy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  shopsURL = 'http://localhost:8080/rest/catalog/shops';
  categoriesURL = 'http://localhost:8080/rest/catalog/categories';

  constructor(private proxyService: ProxyService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(paramMap => {
      if (paramMap) {
        const shopId = parseInt(paramMap.get('shopId'), 10);
        if (shopId || shopId === 0) {
          const href = this.shopsURL + `/${shopId}/products`;
          this.products = this.proxyService.getProducts(href);
          return;
        }
        const categoryId = parseInt(paramMap.get('categoryId'), 10);
        if (categoryId || categoryId === 0) {
          const href = this.categoriesURL + `/${categoryId}/products`;
          this.products = this.proxyService.getProducts(href);
          return;
        }
        this.products = this.proxyService.getProducts();
        return;
      }
      this.products = this.proxyService.getProducts();
    });
  }

}
