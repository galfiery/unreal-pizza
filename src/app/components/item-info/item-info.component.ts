import { Component, Input, OnInit, inject } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent {
  baseService: BaseService = inject(BaseService);
  cartService: CartService = inject(CartService);

  @Input()
  item: Item = new Item({});

  constructor() {}

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }

  saveItem(item: Item) {
    this.cartService.addItem(item);
  }
}
