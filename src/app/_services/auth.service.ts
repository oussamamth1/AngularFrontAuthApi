import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/api/';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
interface LoginResponse {
  access_token: string;
  data: any;
  name: string;
  status: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login_check',{
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  refreshToken(token: string) {
    return this.http.post(AUTH_API + 'refreshtoken', {
      refreshToken: token
    }, httpOptions);
  }
  
  postd(label: string): Observable<any> {
    return this.http.post(AUTH_API + 'categories', {
      label
      
    }, httpOptions);}
}
