import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent  implements OnInit {

  @Input()
  item: any;

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    console.log(this.item);
  }

  dismiss() {

  }

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }

}
