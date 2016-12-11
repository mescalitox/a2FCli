import { Component, OnInit } from '@angular/core';
import { UserManagerService } from './../shared/user-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private title: string;

  private listUsers: any[];
  private errorMessage: string;

  constructor(private userManagerService: UserManagerService) {
    this.title = "liste utilisateurs";
    userManagerService.getUsers().then(
      users => { console.log(users); this.listUsers = users },
      error => {
        this.errorMessage = <any>error;
        console.error(this.errorMessage)
      });
  }

  ngOnInit() {
  }

}
