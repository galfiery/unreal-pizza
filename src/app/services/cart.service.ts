import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  httpClient: HttpClient = inject(HttpClient);

  savedItems$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {}

  getSavedItems(): Observable<Item[]> {
    return this.savedItems$.asObservable();
  }

  addItem(newItem: Item) {
    const savedItems: Item[] = this.savedItems$.getValue();
    savedItems.push(newItem);
    this.savedItems$.next(savedItems);
  }

  removeItem(item: Item) {
    const savedItems: Item[] = this.savedItems$.getValue();
    const removeId: number = savedItems.findIndex(
      (it: Item) => it.id === item.id
    );
    this.savedItems$.next(savedItems.slice(removeId));
  }
}
