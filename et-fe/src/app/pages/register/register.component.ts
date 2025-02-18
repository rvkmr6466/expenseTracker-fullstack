import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) { }

  register() {
    // Implement API call for user registration
    console.log('Registering:', this.name, this.email, this.password);
    if (!!(this.name && this.email && this.password)) {
      this.authService.register({ name: this.name, username: this.email, password: this.password }).subscribe({
        next: (response) => {
          console.log("Register successfully!", response)
        },
        error: error => console.log(error),
        complete: () => this.router.navigate(['/login'])
      })
    } else {
      console.log("Route to Home");
      this.router.navigate(['home']);
    }
  }
}
