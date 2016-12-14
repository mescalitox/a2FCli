import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

    @Output() jobResult: EventEmitter<string> = new EventEmitter<string>();

    constructor(private userManagerService: UserManagerService) {

        //souscription à l'émission de l'évenement de user manager qui est la sélection du user
        userManagerService.subscribe(user => {
            this.itemInitial = user;
            this.item = Object.assign({}, user)
            console.warn(this.item);
        });
    }

    //réinitialiser le user
    onReset() {
        this.item = Object.assign({}, this.itemInitial);
        console.warn("reset");
    }

    test() {
        console.warn("test");
    }

    onSubmit() {
        console.warn("submit");
        this.jobResult.emit("done");
    }


    ngOnInit() {
    }

}
