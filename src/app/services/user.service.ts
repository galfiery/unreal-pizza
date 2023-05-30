import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getUserLogged(): Promise<User> {
    return new Promise((resolve, reject) => {
      try {
        const endpoint = '../../assets/mocked-data/user-logged.json';
        this.httpClient.get(endpoint)
        .subscribe((res: any) => {
          resolve(res);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}
