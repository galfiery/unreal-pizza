import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Section } from 'src/app/common/section-enum';
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
  itemService: ItemService = inject(ItemService);
  route: ActivatedRoute = inject(ActivatedRoute);
  baseService: BaseService = inject(BaseService);
  modalCtrl: ModalController = inject(ModalController);

  paramMap$: Observable<ParamMap> = this.route.paramMap;
  items$: Observable<Item[]> = new Observable<Item[]>();

  title: string = '';

  constructor() {}

  ngOnInit() {
    this.paramMap$.subscribe((route: ParamMap) => {
      const itemType = route.get('section') as Section;
      this.items$ = this.itemService.findByType(itemType);
    });
  }

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
