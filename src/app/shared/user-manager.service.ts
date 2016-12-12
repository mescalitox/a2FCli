import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user';
import './rxjs-operators';

const API = 'http://localhost:3000/users'

@Injectable()
export class UserManagerService extends EventEmitter<any> {

  public users: User[] = [];

  constructor(private http: Http) {
    super();
    this.http.get(API).toPromise()
      .then(res => this.users.push(...res.json()))
      .catch(error => console.error(error.message));
  }

  selectUser(user) {
    this.emit(user);
  }

  add(name, codename) {

  }

  remove() {

  }

  // public getUsers(): Promise<User[]> {
  //   return this.http.get(API).toPromise()
  //     .then(res => res.json())
  //     .catch(this.handleError);
  // }

  // private handleError(error: Response | any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Promise.reject(errMsg);
  // }



}
