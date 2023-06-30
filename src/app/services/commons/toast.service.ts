import { Injectable, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Toast, ToastType } from 'src/app/models/common/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastCtrl: ToastController = inject(ToastController);

  toast$: BehaviorSubject<Toast> = new BehaviorSubject<Toast>({
    opened: false,
    message: '',
    type: ToastType.SUCCESS,
  });

  constructor() {}

  showToast(message: string, type: ToastType, duration?: number) {
    const toast = this.toast$.getValue();
    if (!toast.opened) this.open(message, type, duration);
  }

  private open(message: string, type: ToastType, duration?: number) {
    this.toast$.next({ message, type, opened: true });
    setTimeout(
      () => {
        this.close();
      },
      duration ? duration : 3000
    );
  }

  close() {
    const toast: Toast = this.toast$.getValue();
    toast.opened = false;
    this.toast$.next(toast);
  }

  getToast(): Observable<Toast> {
    return this.toast$.asObservable();
  }
}
