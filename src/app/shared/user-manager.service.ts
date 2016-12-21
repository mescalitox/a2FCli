import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user';
import './rxjs-operators';

const API = 'http://localhost:3000/users'

@Injectable()
export class UserManagerService {

  public users: User[] = [];

  public editDoneEvent: EventEmitter<any> = new EventEmitter<any>();
  public removeDoneEvent: EventEmitter<any> = new EventEmitter<any>();
  public selectEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: Http) {
    this.http.get(API).toPromise()
      .then(res => this.users.push(...res.json()))
      .catch(error => console.error(error.message));
  }

  selectUser(user) {
    this.selectEvent.emit(user);
  }

  //suppression
  remove(userASupprimer: User): Promise<User> {
    return this.http.delete(`${API}/${userASupprimer.id}`).toPromise().then(res => {
      let supprUser = res.json();
      //suppression dans la liste
      this.users.splice(this.users.findIndex(u => u.id === userASupprimer.id), 1);
      //emission de l'event de job done pour alerter les components qui souhaiteraient être informés. (préférable de lancer l'event par l'appelant ?)
      this.removeDoneEvent.emit(userASupprimer);
      //renvoi du user à supprimer (le supprimé est vide)
      return userASupprimer
    });
  }

  //ajout ou modif
  save(user: User): Promise<User> {
    //user existant
    if (user.id) {
      return this.http.put(`${API}/${user.id}`, { "name": user.name, "codename": user.codename }).toPromise()
        .then(res => {
          let majUser = res.json();
          //remplacement dans la liste
          this.users.splice(this.users.findIndex(u => u.id === majUser.id), 1, majUser);
          //émission de l'event de job done pour les components qui souhaiteraient être informés. (préférable de lancer l'event par l'appelant ?)
          this.editDoneEvent.emit(majUser);
          //renvoi du user modifié
          return majUser;
        });
    }
    //nouvel user
    else {
      return this.http.post(API, { "name": user.name, "codename": user.codename }).toPromise()
        .then(res => {
          let newUser = res.json();
          console.log(newUser);
          //ajout dans la liste
          this.users.push(newUser);
          //émission de l'event de job done pour les components qui souhaiteraient être informés.
          this.editDoneEvent.emit(newUser);
          //renvoi du user créé
          return newUser;
        });
    }
  }

  //save avec data sans id .
  save2(idUser: number, majData: any): Promise<User> {
    //user existant    
    if (idUser != null) {
      return this.http.put(`${API}/${idUser}`, majData).toPromise()
        .then(res => {
          let majUser = res.json();
          //remplacement dans la liste
          this.users.splice(this.users.findIndex(u => u.id === majUser.id), 1, majUser);
          //émission de l'event de job done pour les components qui souhaiteraient être informés.
          this.editDoneEvent.emit(majUser);
          //renvoi du user modifié
          return majUser;
        });
    }//nouvel user
    else {
      return this.http.post(API, majData).toPromise()
        .then(res => {
          let newUser = res.json();
          console.log(newUser);
          //ajout dans la liste
          this.users.push(newUser);
          //émission de l'event de job done pour les components qui souhaiteraient être informés.
          this.editDoneEvent.emit(newUser);
          //renvoi du user créé
          return newUser;
        });
    }
  }


  // saveP1(user: User): Promise<User> {
  //   return this.http.put(API + "/" + user.id, { "name": user.name, "codename": user.codename }).toPromise()
  //     .then(res => {
  //       let majUser = res.json();
  //       //remplacement dans la liste
  //       this.users.splice(this.users.findIndex(u => u.id === majUser.id), 1, majUser);

  //       //émission de l'event de job done pour les components qui souhaiteraient être informés.
  //       this.editDoneEvent.emit(majUser);

  //       //renvoi du user modifié
  //       return majUser;
  //     });
  // }





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
