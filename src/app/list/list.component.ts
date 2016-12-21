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
  private currentItemToRemove: any = {};

  constructor(private userManagerService: UserManagerService) {
    this.title = "Liste utilisateurs";
    //directement la référence du service : pas de futur get
    this.listItems = userManagerService.users;
    //souscription à l'event du job d'édition terminé
    userManagerService.editDoneEvent.subscribe(user => {
      console.warn("event edit done levé")
      if (user) {
        //positionnement sur le user (utile lors de création)
        let futureCurrentUser = this.listItems.find(item => item.id === user.id);
        //relance de la sélection pour renvoyer le user sélectionné (utile si nouvel user)
        this.select(futureCurrentUser);
      }
    })
    //souscription à l'event du job de suppression terminé
    userManagerService.removeDoneEvent.subscribe(user => {
      console.warn("event remove done levé")
      //si l'item sélectionné est le user supprimé
      console.log(user);
      if (this.currentItem && this.currentItem.id === user.id) {
        //annulation de la sélection
        this.select(null);
      }

    });

  }

  ngOnInit() {
  }

  select(item: any) {
    this.currentItem = item;
    this.userManagerService.selectUser(item);
  }

  onClickToRemove(item: any) {
    this.currentItemToRemove = item;
  }

  onRemove(confirm: boolean) {
    console.warn(confirm)
    if (confirm) {
      this.userManagerService.remove(this.currentItemToRemove).then(user => {
        console.warn("delete effectué");
        console.warn(user);
      })
      console.warn("delete");
    }
  }

}
