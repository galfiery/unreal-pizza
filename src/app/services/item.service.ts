import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';
import { Section } from '../common/section-enum';
import { Observable, distinctUntilChanged, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  findByType(itemType: Section): Observable<Item[]> {
    return this.httpClient.get(`/item/get-by-category-type/${itemType}`).pipe(
      distinctUntilChanged(),
      map((res: any) => res.map((it: any) => new Item(it)))
    );
  }

  findAll(): Observable<Item[]> {
    return this.httpClient.get(`/item`).pipe(
      map((res: any) => res.map((it: any) => new Item(it))),
      shareReplay(),
    );
  }
}
