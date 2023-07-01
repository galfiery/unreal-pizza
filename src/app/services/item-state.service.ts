import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemStateService {
  itemSelected$: BehaviorSubject<Item> = new BehaviorSubject<Item>(new Item());

  constructor() {}

  setSelected(item: Item): void {
    this.itemSelected$.next(item);
  }

  getSelected(): Observable<Item> {
    return this.itemSelected$.asObservable();
  }
}
