import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';

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
        const endpoint = '../../assets/mocked-data/classic-pizza.json';
        this.httpClient.get(endpoint)
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
        const endpoint = '../../assets/mocked-data/special-pizza.json';
        this.httpClient.get(endpoint)
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
        const endpoint = '../../assets/mocked-data/drink.json';
        this.httpClient.get(endpoint)
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
        const endpoint = '../../assets/mocked-data/dessert.json';
        this.httpClient.get(endpoint)
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
        const endpoint = '../../assets/mocked-data/pizza-week.json';
        this.httpClient.get(endpoint)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject (err);
      }
    });
  }
}
