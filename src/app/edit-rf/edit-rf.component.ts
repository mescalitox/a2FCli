import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserManagerService } from './../shared/user-manager.service';

@Component({
  selector: 'app-edit-rf',
  templateUrl: './edit-rf.component.html',
  styleUrls: ['./edit-rf.component.css']
})
export class EditRfComponent implements OnInit, OnChanges {

  private formEdit: FormGroup;

  private item: any;

  constructor(private userManagerService: UserManagerService) {
    this.formEdit = new FormGroup({
      name: new FormControl('', [Validators.required]),
      codename: new FormControl('', [Validators.required, Validators.minLength(3)])
    }, this.specialValidator);

    //souscription à l'émission de l'évenement de user manager qui est la sélection du user : comme un input
    userManagerService.selectEvent.subscribe(user => {
      console.warn("selection levé par edit");
      console.warn(user);
      this.item = user;
      this.formEdit.reset({ name: this.item.name, codename: this.item.codename });
    });

  }

  specialValidator(g: FormGroup) {
    let valid = g.get('name').value != '' && g.get('name').value === g.get('codename').value ? { 'identiques': true } : null;
    return valid;
  }

  ngOnInit() {
    console.warn("init");
  }


  ngOnChanges() {
    // todo ?
    console.warn("changes");
  }

  onCancel() {
    this.formEdit.reset({ name: this.item.name, codename: this.item.codename });
  }

  onSubmit() {
    // let majItem = this.formEdit.value;
    // majItem.id = this.item.id;
    // console.log(majItem);
    console.log(this.formEdit.value);   // {name: 'valeur...', codename: 'valeur...'}
    console.log(this.formEdit.status);  // 'VALID'
    console.log("model-based form submitted");
    this.userManagerService.save2(this.item.id, this.formEdit.value).then(majItem => {
      //action sur la résolution de la promise
      console.warn("submit effectué");
      console.warn(majItem);
    });
  }

}
