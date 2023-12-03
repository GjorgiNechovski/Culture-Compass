import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService) { }

  register(): void {
    // Implement registration logic using AuthenticationService or a separate UserService
    const isRegistered = this.authService.register(this.username, this.password);
    if (isRegistered) {
      // Handle successful registration (e.g., show success message, redirect to login)
    } else {
      console.error();
    }
  }
}
