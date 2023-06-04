import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService,
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

  async getAccessToken(): Promise<string | null> {
    const token = await this.cacheService.getToken();
    return token;
  }
}
