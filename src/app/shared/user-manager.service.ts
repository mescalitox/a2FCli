import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user';
import './rxjs-operators';

const API = 'http://localhost:3000/users'

@Injectable()
export class UserManagerService {

  constructor(private http: Http) { }

  public getUsers(): Promise<User[]> {

    return this.http.get(API).toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


  add(name, codename) {

  }

  remove() {

  }



}
