import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagerService {

  private users: User[] = [];

  constructor() {

    this.add("julien", "jaja");
    // console.warn(this.users);
  }

  add(name, codename) {
    let id = this.users.length + 1;
    this.users.push(new User(id, name, codename))
  }

  remove() {

  }

  public get $users(): User[] {
    return this.users;
  }

  public set $users(value: User[]) {
    this.users = value;
  }

}
