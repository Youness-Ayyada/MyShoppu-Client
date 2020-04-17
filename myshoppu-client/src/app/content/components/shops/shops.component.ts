import { Component, OnInit } from '@angular/core';
import { ProxyService } from 'src/app/core/services/proxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  shops: any;

  constructor(private proxyService: ProxyService, 
              private router: Router) { }

  ngOnInit() {
    this.shops = this.proxyService.getShops();
  }

  navigate(shopId: number) {
    this.router.navigateByUrl(`/products?shopId=${shopId}`);
  }

}
