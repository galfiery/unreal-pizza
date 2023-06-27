import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authService = inject(AuthService);

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async submit() {
    if (this.loginForm.invalid) {
      return;
    }

    try {
      const body = this.loginForm.value;
      const response = await this.authService.login(body.username, body.password);
      if (response) {
        this.router.navigateByUrl('/tabs/home');
      }
      console.log('failed');
    } catch (err) {
      console.log(err);
    }
  }

}
