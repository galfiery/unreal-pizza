import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CacheService } from './cache.service';
import { Observable, map, tap } from 'rxjs';
import { LoginDTO } from '../models/dto/login.dto';
import { LoginReponseDto } from '../models/dto/login-response.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient: HttpClient = inject(HttpClient);
  cacheService: CacheService = inject(CacheService);

  constructor() {}

  login(payload: LoginDTO): Observable<boolean> {
    return this.httpClient
      .post<LoginReponseDto>(`/auth/login`, {
        username: payload.username,
        password: payload.password,
      })
      .pipe(
        tap((v: LoginReponseDto) => this.setAuthInfo(v)),
        map((v: unknown) => !!v)
      );
  }

  private async setAuthInfo(authInfo: LoginReponseDto) {
    if (authInfo) {
      await this.cacheService.setUsername(authInfo.username);
      await this.cacheService.setFirstName(authInfo.firstName);
      await this.cacheService.setLastName(authInfo.lastName);
      await this.cacheService.setEmail(authInfo.email);
      await this.cacheService.setToken(authInfo.token);
    }
  }
}
