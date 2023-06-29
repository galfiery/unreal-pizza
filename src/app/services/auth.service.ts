import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) {}

  login(username: string, password: string): Observable<boolean> {
    return this.httpClient.post(`/auth/login`, { username, password }).pipe(
      tap((v: unknown) => this.setAuthInfo(v)),
      map((v: unknown) => !!v)
    );
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
