import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-confirm',
  templateUrl: './ui-confirm.component.html',
  styleUrls: ['./ui-confirm.component.css']
})
export class UiConfirmComponent implements OnInit {

  @Input() title: string;
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onConfirm() {
    this.confirm.emit(true);
  }

  onCancel() {
    this.confirm.emit(false);
  }

}
