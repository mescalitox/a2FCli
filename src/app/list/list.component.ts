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

  constructor(private userManagerService: UserManagerService) {
    this.title = "liste utilisateurs";
    this.listUsers = userManagerService.$users;
    console.warn(this.listUsers);
  }

  ngOnInit() {
  }

}
