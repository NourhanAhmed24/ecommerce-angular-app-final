import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  standalone: false
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],  
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  submit() {
    
    if (this.registerForm.invalid) return;

    this.loading = true;

    const { username, email, password } = this.registerForm.value;

    this.auth.register(username, email, password).subscribe({
      next: (res: any) => {
     
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error = 'Registration failed. Please try again.';
        this.loading = false;
      }
    });

     console.log('Form submitted!', this.registerForm.value);
  }
}


//username: emilys
//password: emilyspass