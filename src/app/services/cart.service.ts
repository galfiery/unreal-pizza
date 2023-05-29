import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartObs: Subject<number> = new Subject();

  constructor(private httpClient: HttpClient) { }

  async getItemList(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const endpoint = '../../assets/mocked-data/cart-items.json';
        this.httpClient.get(endpoint)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject (err);
      }
    });
  }

  async getItemCounter(): Promise<number> {
    return new Promise(async (resolve, reject) => {
      try {
        const items: any = await this.getItemList();
        resolve(items?.length || 0);
      } catch (err) {
        reject (err);
      }
    });
  }

  getCartObs(): Observable<number> {
    return this.cartObs.asObservable();
  }

  refreshCartObs(items: number) {
    this.cartObs.next(items);
  }

}
