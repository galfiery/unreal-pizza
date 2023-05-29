import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  cartItems: number = 0;

  constructor(private cartService: CartService) {}

  async ngOnInit() {
    this.cartItems = await this.getCartItems();

    this.cartService.getCartObs()
    .subscribe((items) => {
      this.cartItems = items;
    });
  }

  async getCartItems() {
    const items = await this.cartService.getItemCounter();
    return items;
  }


}
