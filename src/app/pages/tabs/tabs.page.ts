import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  cartService: CartService = inject(CartService);

  cartItems$: Observable<Item []> = this.cartService.getSavedItems();

  constructor() {}
}
