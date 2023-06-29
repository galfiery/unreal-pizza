import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  translate: TranslateService = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('it');
  }
}
