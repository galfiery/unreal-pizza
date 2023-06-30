export class Toast {
  opened: boolean;
  message: string;
  type: ToastType;

  constructor(data: any) {
    this.opened = data.opened;
    this.message = data.message;
    this.type = data.type;
  }
}

export enum ToastType {
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
}
