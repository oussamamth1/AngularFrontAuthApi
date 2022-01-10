import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';


const API_URL = 'http://127.0.0.1:8000/api/';


@Injectable({
  providedIn:'root'
})
export class UserService {

  // data:any;
  constructor(private http: HttpClient ) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL +'ouviers').pipe(tap(data=>JSON.stringify(data)))

  }
  getProduits(): Observable<any> {
    return this.http.get(API_URL +'products').pipe(tap(data=>JSON.stringify(data)))

  }
  // .pipe(
  //   tap(data =>
  //   console.log('All: ' + JSON.stringify(data)))
  // );
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'posts').pipe(tap(data=>JSON.stringify(data)))
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'users').pipe(tap(data=>JSON.stringify(data)))
  }
  // data:Number[]=[1,2,3,4];
  SetPublish(): Observable<any> {
    // for (var _i = 0; _i < this.data.length; _i++) {
    return this.http.get('http://127.0.0.1:8000').pipe(tap(datauser=>JSON.stringify(datauser)));
      // console.log()
      // var num = data[_i];
      // console.log(num);
  // }
  }
  
}
