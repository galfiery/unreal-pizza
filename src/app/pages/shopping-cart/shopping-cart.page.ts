import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
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
    private baseService: BaseService,
    private modalController: ModalController
    ) {}

  async ionViewWillEnter() {
    this.itemList = await this.getItemList();
  }

  async getItemList() {
    const itemList = await this.cartService.getItemList();
    return itemList;
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

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }

}
