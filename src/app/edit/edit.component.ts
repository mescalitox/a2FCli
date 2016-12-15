import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
            console.warn("selection levé par edit");
        });
    }

    //réinitialiser le user
    onReset() {
        this.item = Object.assign({}, this.itemInitial);
        console.warn("reset");
    }

    onSubmit(formEdit: NgForm) {
        this.userManagerService.save(this.item).then(user => {
            //action sur la résolution de la promise
            console.warn("submit effectué");
            console.warn(user);
        });
        //initialisation du form
        formEdit.resetForm();
        console.warn("submit lancé");
    }


    ngOnInit() {
    }

}
