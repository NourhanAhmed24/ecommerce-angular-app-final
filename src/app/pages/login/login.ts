import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: false
})

export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],  
      password: ['', Validators.required]
    });
  }

submit() {

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    console.log('Form is invalid:', this.loginForm);
    return;
  }

  this.loading = true;
  this.error = '';

  const { username, password } = this.loginForm.value;

  this.auth.login(username!, password!).subscribe({

    next: (res: any) => {

     
      localStorage.setItem('token', res.accessToken);

      localStorage.setItem('user', JSON.stringify(res));

      this.loading = false;

   
      this.router.navigate(['/home']);
    },

    error: (err) => {
      const msg = err.error?.message;

      if (msg === 'Invalid credentials') {
        this.error = 'Wrong username or password';
      } else {
        this.error = 'Something went wrong. Try again.';
      }

      this.loading = false;
    }

  });

}
}


//username: emilys
//password: emilyspass