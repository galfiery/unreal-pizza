import { Component } from '@angular/core';
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
      const classicPizzaItems: any [] = await this.itemService.findAllClassicPizza();
      for (let item of classicPizzaItems) {
        if (item.name.includes(event?.detail?.value)) {
          this.itemList.push(item);
        }
      }
      this.searching = true;
    } else {
      this.searching = false;
    }
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
