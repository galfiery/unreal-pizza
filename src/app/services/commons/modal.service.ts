import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  getOpened(): Observable<boolean> {
    return this.opened$.asObservable();
  }

  open(): void {
    this.opened$.next(true);
  }

  close(): void {
    this.opened$.next(false);
  }
}
