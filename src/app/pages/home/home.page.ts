import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  distinctUntilChanged,
  map,
} from 'rxjs';
import { Section } from 'src/app/common/section-enum';
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
  filteredItems$: Observable<Item[]> = new Observable<Item[]>();
  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  search(event: any): void {
    if (event?.detail?.value) {
      this.searchValue$.next(event?.detail?.value);
      this.filteredItems$ = combineLatest(
        this.itemService.findByType(Section.CLASSIC),
        this.itemService.findByType(Section.SPECIAL)
      ).pipe(
        distinctUntilChanged(),
        map(([classicPizzaList, specialPizzaList]: [Item[], Item[]]) =>
          classicPizzaList
            .concat(specialPizzaList)
            .filter((it: Item) => it.name.includes(event.detail.value))
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
