import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
  return this.http.post<any>(
    'https://dummyjson.com/auth/login',
    { username, password },
    { headers: { 'Content-Type': 'application/json' }}
  );
}

  register(name: string, email: string, password: string): Observable<any> {
    return of({ success: true }).pipe(delay(1000));
  }

  logout() {
    this.isLoggedIn = false;
  }

  getAuthStatus() {
    return this.isLoggedIn;
  }
}