import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BaseService } from 'src/app/services/base.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  userService: UserService = inject(UserService);
  baseService: BaseService = inject(BaseService);

  userLogged$: Observable<User> = this.userService.getUserLogged();

  constructor() {}

  capitalizeFirstLetter(str: string): string {
    return this.baseService.capitalizeFirstLetter(str);
  }
}
