import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.page.html',
  styleUrls: ['shopping-cart.page.scss']
})
export class ShoppingCartPage {

  itemList: any = [];

  constructor(
    private cartService: CartService,
    private baseService: BaseService
    ) {}

  async ionViewWillEnter() {
    this.itemList = await this.getItemList();
  }

  async getItemList() {
    const itemList = await this.cartService.getItemList();
    return itemList;
  }

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }

}
