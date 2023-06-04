import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async findAllClassicPizza(): Promise<Item []> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.get(`/item/get-by-category-type/classic_pizza`)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject (err);
      }
    });
  }

  async findAllSpecialPizza(): Promise<Item []> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.get(`/item/get-by-category-type/special_pizza`)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject (err);
      }
    });
  }

  async findAllDrink(): Promise<Item []> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.get(`/item/get-by-category-type/drink`)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject (err);
      }
    });
  }

  async findAllDessert(): Promise<Item []> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.get(`/item/get-by-category-type/dessert`)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject (err);
      }
    });
  }

  async findAllPizzaWeek(): Promise<Item []> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.get(`/item/get-by-category-type/week`)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject (err);
      }
    });
  }
}
