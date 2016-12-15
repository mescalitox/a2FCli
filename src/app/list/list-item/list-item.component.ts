import { Component, OnInit, Input } from '@angular/core';
import { UserManagerService } from './../../shared/user-manager.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: any;
  @Input() active: boolean;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit() {
  }

  onRemove(item) {
    this.userManagerService.remove(item).then(user => {
      console.warn("delete effectué");
      console.warn(user);
    })
    console.warn("delete");
  }

}
