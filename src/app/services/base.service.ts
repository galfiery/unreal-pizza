import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  capitalizeFirstLetter(str: string): string {
    if (str.length === 0) {
      return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const remainingLetters = str.slice(1);

    return firstLetter + remainingLetters;
  }
}
