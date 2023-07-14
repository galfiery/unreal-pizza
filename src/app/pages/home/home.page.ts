import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  BehaviorSubject,
  Observable,
  map,
  take,
} from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  baseService: BaseService = inject(BaseService);
  modalCtrl: ModalController = inject(ModalController);
  itemService: ItemService = inject(ItemService);

  searching$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  items$: Observable<Item[]> = this.itemService.findAll();
  filteredItems$: Observable<Item[]> = new Observable<Item[]>();
  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  search(event: any): void {
    if (event?.detail?.value) {
      this.searchValue$.next(event?.detail?.value);
      this.filteredItems$ = this.items$.pipe(
        take(1),
        map((itemList: Item[]) =>
          itemList.filter((it: Item) => it.name.includes(event.detail.value))
        )
      );
      this.searching$.next(true);
    } else this.searching$.next(false);
  }

  cleanSearch(): void {
    this.searchValue$.next('');
    this.searching$.next(false);
  }
}
