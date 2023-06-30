import { Component, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.page.html',
  styleUrls: ['shopping-cart.page.scss'],
})
export class ShoppingCartPage {
  cartService: CartService = inject(CartService);

  cartItems$: Observable<Item[]> = this.cartService
    .getSavedItems()
    .pipe(shareReplay());

  constructor() {}
}
