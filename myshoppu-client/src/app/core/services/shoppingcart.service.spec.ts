import { TestBed } from '@angular/core/testing';

import { ShoppingCartService } from './shoppingcart.service';

describe('ShopingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    expect(service).toBeTruthy();
  });
});
