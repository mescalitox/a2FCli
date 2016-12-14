import { Component, OnInit } from '@angular/core';

import { UserManagerService } from './../shared/user-manager.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    private item: any;

    private title: string;

    private itemInitial: any;

    constructor(private userManagerService: UserManagerService) {

        //souscription à l'émission de l'évenement de user manager qui est la sélection du user
        userManagerService.subscribe(user => {
            this.itemInitial = user;
            this.item = Object.assign({}, user)
            console.log("event reçu");
            console.warn(this.item);
        });
    }

    //réinitialiser le user
    onReset() {
        this.item = Object.assign({}, this.itemInitial);
        console.warn("reset");
    }

    onSubmit() {
        this.userManagerService.save(this.item);
        console.warn("submit");
    }


    ngOnInit() {
    }

}
