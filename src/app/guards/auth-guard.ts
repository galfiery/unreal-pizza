import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  userService = inject(UserService);

  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.isAuthenticated().pipe(
      map((authenticated: boolean) => {
        if (!authenticated) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }

  private isAuthenticated(): Observable<boolean> {
    return this.userService.getAccessToken().pipe(
      map((token: string | null) => {
        if (token) return true;
        else return false;
      })
    );
  }
}
