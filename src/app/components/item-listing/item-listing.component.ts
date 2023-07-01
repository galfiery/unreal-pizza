import { Observable } from 'rxjs';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/commons/toast.service';
import { ToastType } from 'src/app/models/common/toast.model';
import { ItemStateService } from 'src/app/services/item-state.service';
import { ModalService } from 'src/app/services/commons/modal.service';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss'],
})
export class ItemListingComponent implements OnInit {
  baseService: BaseService = inject(BaseService);
  cartService: CartService = inject(CartService);
  toastService: ToastService = inject(ToastService);
  itemStateService: ItemStateService = inject(ItemStateService);
  modalService: ModalService = inject(ModalService);

  @Input()
  items$: Observable<Item[]> = new Observable<Item[]>();
  cartItems$: Observable<Item []> = this.cartService.getSavedItems();
  itemSelected$: Observable<Item> = this.itemStateService.getSelected();

  @Input()
  showMoreInfo: boolean = false;

  constructor() {}

  ngOnInit() {}

  openInfo(item: Item): void {
    this.itemStateService.setSelected(item);
    this.modalService.open();
  }

  closeInfo(): void {
    this.modalService.close();
  }

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }

  removeItem(item: Item): void {
    try {
      this.cartService.removeItem(item);
      this.showSuccessMessage('toast.message.removed_item_cart_success');
    } catch (err: any) {
      this.showFailedMessage('toast.message.removed_item_cart_error');
    }
  }

  addItem(item: Item): void {
    try {
      this.cartService.addItem(item);
      this.showSuccessMessage('toast.message.added_item_cart_success');
    } catch (err: any) {
      this.showFailedMessage('toast.message.add_item_cart_error');
    }
  }

  showSuccessMessage(message: string): void {
    this.toastService.showToast(message, ToastType.SUCCESS);
  }

  showFailedMessage(message: string): void {
    this.toastService.showToast(message, ToastType.DANGER);
  }
}
