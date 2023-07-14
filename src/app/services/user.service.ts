import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';
import {
  Observable,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient: HttpClient = inject(HttpClient);
  cacheService: CacheService = inject(CacheService);

  constructor() {}

  getUserLogged(): Observable<User> {
    return combineLatest(
      this.cacheService.getFirstName(),
      this.cacheService.getLastName(),
      this.cacheService.getUsername(),
      this.cacheService.getEmail()
    ).pipe(
      distinctUntilChanged(),
      map(
        ([firstName, lastName, username, email]: [any, any, any, any]) =>
          new User({
            firstName: firstName.value,
            lastName: lastName.value,
            username: username.value,
            email: email.value,
          })
      )
    );
  }

  getAccessToken(): Observable<string | null> {
    return this.cacheService.getToken().pipe(
      map((token: any) => token.value)
    );
  }
}
