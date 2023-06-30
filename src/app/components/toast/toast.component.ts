import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Toast } from 'src/app/models/common/toast.model';
import { ToastService } from 'src/app/services/commons/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  toastService: ToastService = inject(ToastService);

  toast$: Observable<Toast> = this.toastService.getToast();

  constructor() {}

  ngOnInit() {}

  dismiss() {
    this.toastService.close();
  }
}
