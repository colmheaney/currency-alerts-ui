import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { JwtHelper } from '../jwt-helper';

@Injectable()
export class UserService {
    
  private loggedIn = false;
  private signInUrl: string = 'http://localhost:1111/api/v1/user/signin';
  private logOutUrl: string = 'http://localhost:1111/api/v1/user/logout';
  private registrationUrl: string = 'http://localhost:1111/api/v1/user';
  private headers = new Headers({
          'Content-Type'    : 'application/json', 
          'X-Requested-With': 'XMLHttpRequest'});
  private jwtHelper = new JwtHelper();

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  register(user: any) {    
    return this.http.post(this.registrationUrl, user, { headers: this.headers })
      .map(res => res.json())
  }

  login(user: any) {    
    return this.http.post(this.signInUrl, user, { headers: this.headers })
      .map(res => res.json())
      .map((res) => {
        if (res) {
          localStorage.setItem('auth_token', res.token);
          this.loggedIn = true;
        }
        return res;
      });
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    //hack to get browser to forget the original auth header else it just keeps using the same one.
    window.location.href='http://localhost:3000/';
  }

  isLoggedIn() {
    var token = localStorage.getItem('auth_token');
    return this.loggedIn && !this.jwtHelper.isTokenExpired(token);
  }
}