import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { person } from "./person";
import { user } from "./user";
import { product } from "./product";
import { HttpClient } from '@angular/common/http'
@Injectable()
export class Myservice {
  private baseURL: string = 'http://localhost:8081/customerservice';
  private baseURL1: string = 'http://localhost:8081/login';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  user_email = '';
  //  p_id = '';
   user;

  constructor(private _http: HttpClient) {
  }
//return type string
  addUser(user) {

    return this._http.post(this.baseURL + '/customer', user,
    {responseType: 'text'
    });

  }
  login(user) {
    return this._http.post(this.baseURL1, user);
  }
//return type json
  delete(person) {
    return this._http.delete(this.baseURL + '/person/' + person.id).map((response: Response) => response.json());
  }

}