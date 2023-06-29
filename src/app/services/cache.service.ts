import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  getToken(): Observable<unknown> {
    return from(Preferences.get({ key: 'token' }));
  }

  getUsername(): Observable<unknown> {
    return from(Preferences.get({ key: 'username' }));
  }

  getFirstName(): Observable<unknown> {
    return from(Preferences.get({ key: 'firstName' }));
  }

  getLastName(): Observable<unknown> {
    return from(Preferences.get({ key: 'lastName' }));
  }

  getEmail(): Observable<unknown> {
    return from(Preferences.get({ key: 'email' }));
  }

  async setToken(token: string): Promise<void> {
    await Preferences.set({ key: 'token', value: token });
  }

  async setUsername(username: string): Promise<void> {
    await Preferences.set({ key: 'username', value: username });
  }

  async setFirstName(firstName: string): Promise<void> {
    await Preferences.set({ key: 'firstName', value: firstName });
  }

  async setLastName(lastName: string): Promise<void> {
    await Preferences.set({ key: 'lastName', value: lastName });
  }

  async setEmail(email: string): Promise<void> {
    await Preferences.set({ key: 'email', value: email });
  }
}
