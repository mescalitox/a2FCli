import { Component, OnInit } from '@angular/core';
import { UserManagerService } from './../shared/user-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private title: string;

  private listItems: any[];
  private errorMessage: string;
  private currentItem: any;

  constructor(private userManagerService: UserManagerService) {
    this.title = "liste utilisateurs";
    this.listItems = userManagerService.users;
    userManagerService.editDoneEvent.subscribe(user => {
      console.warn("event edit done levé")
      if (user) {
        //positionnement sur le user 
        this.currentItem = this.listItems.find(item => item.id === user.id);
      }
    })
  }

  ngOnInit() {
  }

  select(item: any) {
    this.currentItem = item;
    this.userManagerService.selectUser(item);
  }

}
