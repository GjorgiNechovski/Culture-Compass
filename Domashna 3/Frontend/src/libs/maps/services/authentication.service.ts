import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Needs an API call to check the users credentials
    if (username === 'your_username' && password === 'your_password') {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  checkLogin(): boolean {
    return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }

  register(username: string, password: string): boolean {
    // Needs an API to register the user
    return true;
  }
}
