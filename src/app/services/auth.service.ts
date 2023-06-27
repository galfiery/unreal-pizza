import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService,
  ) { }

  async login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient.post(`/auth/login`, { username, password })
        .subscribe(async (res: any) => {
          await this.setAuthInfo(res);
          resolve(true);
        }, (err) => {
          reject(false);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  private async setAuthInfo(authInfo: any) {
    if (authInfo) {
      await this.cacheService.setUsername(authInfo.username);
      await this.cacheService.setFirstName(authInfo.firstName);
      await this.cacheService.setLastName(authInfo.lastName);
      await this.cacheService.setEmail(authInfo.email);
      await this.cacheService.setToken(authInfo.token);
    }
  }
}
