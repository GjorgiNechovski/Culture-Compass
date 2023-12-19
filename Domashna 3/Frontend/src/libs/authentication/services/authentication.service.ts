import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appApi } from 'src/app/const-variables.models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  logIn(email: string, password: string): Observable<void> {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.post<void>(appApi + '/login', data, {
      headers,
    });
  }

  register(name: string, email: string, password: string): Observable<void> {
    const data = new FormData();
    data.append('username', name);
    data.append('email', email);
    data.append('password', password);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.post<void>(appApi + '/register', data, {
      headers,
    });
  }
}
