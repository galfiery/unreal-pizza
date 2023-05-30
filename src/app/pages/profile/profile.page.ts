import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userLogged: User | undefined;

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.userLogged = await this.getUserInfo();
  }

  async getUserInfo(): Promise<User> {
    const userLogged = await this.userService.getUserLogged();
    return userLogged;
  }

}
