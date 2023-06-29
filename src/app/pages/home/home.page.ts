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
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
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

  constructor() {}

  search(event: any) {
    if (event?.detail?.value) {
      this.filteredItems$ = combineLatest(
        this.itemService.findByType(Section.CLASSIC),
        this.itemService.findByType(Section.SPECIAL)
      ).pipe(
        distinctUntilChanged(),
        map(([classicPizzaList, specialPizzaList]: [Item[], Item[]]) =>
          classicPizzaList.concat(specialPizzaList)
        ),
        map((itemList: Item[]) =>
          itemList.filter((it: Item) => it.name.includes(event.detail.value))
        )
      );
      this.searching$.next(true);
    } else this.searching$.next(false);
  }

  async openInfo(item: any) {
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
