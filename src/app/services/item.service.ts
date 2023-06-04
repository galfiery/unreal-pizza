import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';
import { Section } from '../common/section-enum';

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
        this.httpClient.get(`/item/get-by-category-type/${Section.CLASSIC}`)
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
        this.httpClient.get(`/item/get-by-category-type/${Section.SPECIAL}`)
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
        this.httpClient.get(`/item/get-by-category-type/${Section.DRINK}`)
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
        this.httpClient.get(`/item/get-by-category-type/${Section.DESSERT}`)
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
        this.httpClient.get(`/item/get-by-category-type/${Section.WEEK}`)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject (err);
      }
    });
  }
}
