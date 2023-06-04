import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  async getToken(): Promise<string | null> {
    const token = await Preferences.get({key: 'token'});
    return token.value;
  }

  async getUsername(): Promise<string | null> {
    const token = await Preferences.get({key: 'username'});
    return token.value;
  }

  async getFirstName(): Promise<string | null> {
    const token = await Preferences.get({key: 'firstName'});
    return token.value;
  }

  async getLastName(): Promise<string | null> {
    const token = await Preferences.get({key: 'lastName'});
    return token.value;
  }

  async getEmail(): Promise<string | null> {
    const token = await Preferences.get({key: 'email'});
    return token.value;
  }

  async setToken(token: string): Promise<void> {
    await Preferences.set({key: 'token', value: token});
  }

  async setUsername(username: string): Promise<void> {
    await Preferences.set({key: 'username', value: username});
  }

  async setFirstName(firstName: string): Promise<void> {
    await Preferences.set({key: 'firstName', value: firstName});
  }

  async setLastName(lastName: string): Promise<void> {
    await Preferences.set({key: 'lastName', value: lastName});
  }

  async setEmail(email: string): Promise<void> {
    await Preferences.set({key: 'email', value: email});
  }

}
