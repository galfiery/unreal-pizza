import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.page.html',
  styleUrls: ['shopping-cart.page.scss'],
})
export class ShoppingCartPage {
  cartService: CartService = inject(CartService);
  baseService: BaseService = inject(BaseService);
  modalCtrl: ModalController = inject(ModalController);

  cartItems$: Observable<Item[]> = this.cartService.getSavedItems();

  constructor() {}

  async openInfo(item: Item) {
    const modal = await this.modalCtrl.create({
      component: ItemInfoComponent,
      initialBreakpoint: 0.4,
      breakpoints: [0, 0.25, 0.5, 0.75],
      cssClass: 'half-page-modal',
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        item,
      },
    });

    await modal.present();
  }

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }
}
