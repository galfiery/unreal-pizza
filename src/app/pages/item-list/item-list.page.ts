import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Section } from 'src/app/common/section-enum';
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  itemList: Item [] = [];
  title: string = '';

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private baseService: BaseService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      const paramValue = params.get('section');
      switch (paramValue) {
        case Section.CLASSIC:
          this.itemList = await this.getClassicList();
          this.title = 'Classic Pizzas';
          break;
        case Section.SPECIAL:
          this.itemList = await this.getSpecialList();
          this.title = 'Special Pizzas';
          break;
        case Section.DRINK:
          this.itemList = await this.getDrinkList();
          this.title = 'Drinks';
          break;
        case Section.DESSERT:
          this.itemList = await this.getDessertList();
          this.title = 'Dessert';
          break;
        case Section.WEEK:
          this.itemList = await this.getWeekList();
          this.title = 'Pizzas of the week';
          break;
        default:
          this.itemList = await this.getClassicList();
          this.title = 'Classic Pizzas';
          break;
      }
    });
  }

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }

  async getClassicList(): Promise<Item []> {
    const items: Item [] = await this.itemService.findAllClassicPizza();
    return items;
  }

  async getSpecialList(): Promise<Item []> {
    const items: Item [] = await this.itemService.findAllSpecialPizza();
    return items;
  }

  async getDessertList(): Promise<Item []> {
    const items: Item [] = await this.itemService.findAllDessert();
    return items;
  }

  async getDrinkList(): Promise<Item []> {
    const items: Item [] = await this.itemService.findAllDrink();
    return items;
  }

  async getWeekList(): Promise<Item []> {
    const items: Item [] = await this.itemService.findAllPizzaWeek();
    return items;
  }

}
