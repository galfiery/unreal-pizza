import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent  implements OnInit {

  @Input()
  itemId: number = 0;

  constructor() { }

  ngOnInit() {}

  dismiss() {

  }

}
