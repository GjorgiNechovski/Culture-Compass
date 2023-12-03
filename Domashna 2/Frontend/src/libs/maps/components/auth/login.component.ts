import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService) { }

  login(): void {
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (isAuthenticated) {

    } else {
      console.error();
    }
  }
}
