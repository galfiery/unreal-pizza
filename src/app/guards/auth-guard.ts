import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userService = inject(UserService);

  constructor(
    private router: Router,
  ) {}

  canActivate(): boolean {
    const isAuthenticated = !this.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  async isAuthenticated(): Promise<boolean> {
    const token = await this.userService.getAccessToken();
    if (token) return true;
    else return false;
  }
}
