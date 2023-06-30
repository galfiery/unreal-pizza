import { Observable } from 'rxjs';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { ItemInfoComponent } from '../item-info/item-info.component';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/commons/toast.service';
import { ToastType } from 'src/app/models/common/toast.model';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss'],
})
export class ItemListingComponent implements OnInit {
  baseService: BaseService = inject(BaseService);
  modalCtrl: ModalController = inject(ModalController);
  cartService: CartService = inject(CartService);
  toastService: ToastService = inject(ToastService);

  @Input()
  items$: Observable<Item[]> = new Observable<Item[]>();

  @Input()
  showMoreInfo: boolean = false;

  constructor() {}

  ngOnInit() {}

  async openInfo(item: Item) {
    const modal = await this.modalCtrl.create({
      component: ItemInfoComponent,
      initialBreakpoint: 0.35,
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
    try {
      this.cartService.removeItem(item);
      this.showSuccessMessage('toast.message.removed_item_cart_success');
    } catch (err: any) {
      this.showFailedMessage('toast.message.removed_item_cart_error');
    }
  }

  addItem(item: Item) {
    try {
      this.cartService.addItem(item);
      this.showSuccessMessage('toast.message.added_item_cart_success');
    } catch (err: any) {
      this.showFailedMessage('toast.message.add_item_cart_error');
    }
  }

  showSuccessMessage(message: string) {
    this.toastService.showToast(message, ToastType.SUCCESS);
  }

  showFailedMessage(message: string) {
    this.toastService.showToast(message, ToastType.DANGER);
  }
}
