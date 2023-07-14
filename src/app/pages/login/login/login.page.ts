import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { LoginDTO } from 'src/app/models/dto/login.dto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authService: AuthService = inject(AuthService);
  userService: UserService = inject(UserService);
  formBuilder: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);

  loginForm: FormGroup;
  accessToken$: Observable<string | null> = this.userService.getAccessToken();

  constructor() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    try {
      const body: LoginDTO = new LoginDTO(this.loginForm.value);
      this.authService
        .login(body).pipe(
          filter((res: boolean) => !!res)
        )
        .subscribe(() => this.router.navigate(['/tabs/home']));
    } catch (err) {
      console.log(err);
    }
  }
}
