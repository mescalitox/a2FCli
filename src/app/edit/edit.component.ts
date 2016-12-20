import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


import { UserManagerService } from './../shared/user-manager.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {

    @Input()
    private itemO: EventEmitter<any>;

    private item: any;

    private itemInitial: any;

    constructor(private userManagerService: UserManagerService) {


        //souscription à l'émission de l'évenement de user manager qui est la sélection du user : comme un input
        userManagerService.selectEvent.subscribe(user => {
            console.warn("selection levé par edit");
            console.warn(user);
            this.itemInitial = user;
            //copie de l'objet manipulé
            if (user != null) {
                this.item = Object.assign({}, user)
            }
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
        // formEdit.form.markAsPristine();
        //formEdit.resetForm();
        console.warn("submit lancé");
    }


    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.warn("changes");
        // console.warn(changes);
        // console.log(changes['itemO'].currentValue);
        // console.log(this.itemO);
        // this.itemInitial = this.itemO;
        // //copie de l'objet manipulé
        // if (this.itemO != null) {
        //     this.item = Object.assign({}, this.itemO)
        // }
    }

}
