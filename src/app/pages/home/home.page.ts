import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  searching = false;

  itemList: any = [];

  constructor(
    private itemService: ItemService,
    private baseService: BaseService) {}

  async search(event: any) {
    if (event?.detail?.value) {
      this.itemList = [];
      const itemsAvailables: any [] = await this.getAllItemsAvailables();
      for (let item of itemsAvailables) {
        if (item.name.includes(event?.detail?.value)) {
          this.itemList.push(item);
        }
      }
      this.searching = true;
    } else {
      this.searching = false;
    }
  }

  private async getAllItemsAvailables(): Promise<Item []> {
    let itemsAvailables: Item [] = [];
    const classicPizzaItems: Item [] = await this.itemService.findAllClassicPizza();
    const specialPizzaItems: Item [] = await this.itemService.findAllSpecialPizza();
    itemsAvailables = classicPizzaItems.concat(specialPizzaItems);
    return itemsAvailables
  }

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }

}
