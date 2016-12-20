import { UserManagerService } from './shared/user-manager.service';

import { Component, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private itemO: EventEmitter<any>;

  constructor(private userManagerService: UserManagerService) {
    // userManagerService.selectEvent.subscribe(user => this.itemO = user);
  }

}
