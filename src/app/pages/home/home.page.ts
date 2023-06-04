import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { CacheService } from 'src/app/services/cache.service';
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
    private baseService: BaseService,
    private modalController: ModalController,
    private cacheService: CacheService
  ) {}

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

  async openInfo(item: any) {
    const modal = await this.modalController.create({
      component: ItemInfoComponent,
      initialBreakpoint: 0.40,
      breakpoints: [0, 0.25, 0.5, 0.75],
      cssClass: 'half-page-modal',
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        item
      }
    });

    await modal.present();
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
