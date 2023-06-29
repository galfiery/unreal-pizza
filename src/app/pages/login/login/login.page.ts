import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authService = inject(AuthService);

  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router) {
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
      const body = this.loginForm.value;
      this.authService
        .login(body.username, body.password)
        .pipe(
          filter((response: boolean) => !!response),
          tap(() => this.router.navigate(['/tabs/home']))
        )
        .subscribe();
    } catch (err) {
      console.log(err);
    }
  }
}
