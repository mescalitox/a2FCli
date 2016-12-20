import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { UserManagerService } from './../../shared/user-manager.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {

  @Input() item: any;
  @Input() active: boolean;
  @Output() clickToRemove: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit() {
  }

  // remove sans modal : modal est dans la liste
  //  onRemove(item) {
  //   this.userManagerService.remove(item).then(user => {
  //     console.warn("delete effectué");
  //     console.warn(user);
  //   })
  //   console.warn("delete");
  // }

  selectToRemove(item) {
    this.clickToRemove.emit(item);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.warn(changes);
    // console.log(changes['item'].currentValue);
  }

}
