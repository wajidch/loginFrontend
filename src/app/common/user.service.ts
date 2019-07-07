import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService implements OnInit {

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("Access-Control-Allow-Origin", "*")

    return this._http.post(environment.baseUrl + 'User/login',
      {
        email: email,
        password: password,

      }, { headers: headers })

  }

}