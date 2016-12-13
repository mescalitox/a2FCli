import { Component, OnInit, Input } from '@angular/core';

// enum LevelClassDisponible { 'btn-primary', 'btn-success', 'btn-danger' }

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css']
})
export class UiButtonComponent implements OnInit {

  @Input() level: number;
  @Input() icon: string;
  @Input() disabled: boolean = false;

  // private levelClass: string;

  constructor() { }

  ngOnInit() {
    // this.levelClass = LevelClassDisponible[this.level];
  }

}
