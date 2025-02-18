import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        // localStorage.setItem('token', response.token);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert('Invalid credentials!');
        console.error
      }
    });
  }
}
