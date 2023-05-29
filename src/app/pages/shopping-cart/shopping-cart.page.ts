import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.page.html',
  styleUrls: ['shopping-cart.page.scss']
})
export class ShoppingCartPage {

  itemList: any = [];

  constructor(private cartService: CartService) {}

  async ionViewWillEnter() {
    this.itemList = await this.getItemList();
  }

  async getItemList() {
    const itemList = await this.cartService.getItemList();
    return itemList;
  }

  capitalizeFirstLetter(str: string): string {
    if (str.length === 0) {
      return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const remainingLetters = str.slice(1);

    return firstLetter + remainingLetters;
  }

}
