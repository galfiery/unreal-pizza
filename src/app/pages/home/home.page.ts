import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  searching = false;

  itemList: any = [];

  constructor(private itemService: ItemService) {}

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
    if (str.length === 0) {
      return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const remainingLetters = str.slice(1);

    return firstLetter + remainingLetters;
  }

}
