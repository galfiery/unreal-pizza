import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, from, of, switchMap } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.userService.getAccessToken()).pipe(
      switchMap((token) => {
        const modifiedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next.handle(modifiedRequest);
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(new HttpResponse({ status: 401 }));
      })
    );
  }
}
