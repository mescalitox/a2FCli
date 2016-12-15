import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-confirm',
  templateUrl: './ui-confirm.component.html',
  styleUrls: ['./ui-confirm.component.css']
})
export class UiConfirmComponent implements OnInit {

  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onConfirm() {
    this.confirm.emit('done');
  }

}
