import { Observable } from 'rxjs';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { ItemInfoComponent } from '../item-info/item-info.component';
import { ModalController } from '@ionic/angular';
import { ItemService } from 'src/app/services/item.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss'],
})
export class ItemListingComponent  implements OnInit {
  baseService: BaseService = inject(BaseService);
  modalCtrl: ModalController = inject(ModalController);
  itemService: ItemService = inject(ItemService);
  cartService: CartService = inject(CartService);

  @Input()
  items$: Observable<Item []> = new Observable<Item []>

  @Input()
  showMoreInfo: boolean = false;

  constructor() { }

  ngOnInit() {}

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

  removeItem(item: Item) {
    this.cartService.removeItem(item);
  }

}
