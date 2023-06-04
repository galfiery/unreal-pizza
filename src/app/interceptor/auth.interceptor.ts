import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, catchError, from, of, switchMap, throwError } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.userService.getAccessToken()).pipe(
      switchMap(token => {
        const modifiedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(modifiedRequest);
      }),
      catchError(error => {
        console.error('Error retrieving token:', error);
        return of(new HttpResponse({ status: 401 }));
      })
    );
  }

}
