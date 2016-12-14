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

  remove() {

  }

  // savePromise(user: User):Promise<User> {
  //   return new Promise<User>(resolve => {
  //       //user existant
  //       if (user.id) {
  //         this.http.put(API + "/" + user.id, { "name": user.name, "codename": user.codename }).toPromise()
  //           .then(res => {
  //             //remplacement dans la liste
  //             this.users.splice(this.users.findIndex(u => u.id === user.id), 1, user);
  //             return user;
  //           });
  //       }
  //       //nouvel user
  //       else {
  //         this.http.post(API, { "name": user.name, "codename": user.codename }).toPromise()
  //           .then(res => {
  //             let newUser = res.json();
  //             console.log(newUser);
  //             //ajout dans la liste
  //             this.users.push(newUser);
  //             return newUser;
  //           });
  //       }
  //   });
  // }


  save(user: User) {
    //user existant
    if (user.id) {
      this.http.put(API + "/" + user.id, { "name": user.name, "codename": user.codename }).toPromise()
        .then(res => {
          //remplacement dans la liste
          this.users.splice(this.users.findIndex(u => u.id === user.id), 1, user);
          //émission de l'event de sélection
          this.emit(user);
        });
    }
    //nouvel user
    else {
      this.http.post(API, { "name": user.name, "codename": user.codename }).toPromise()
        .then(res => {
          let newUser = res.json();
          console.log(newUser);
          //ajout dans la liste
          this.users.push(newUser);
          //émission de l'event de sélection
          this.emit(newUser);
        });
    }
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
