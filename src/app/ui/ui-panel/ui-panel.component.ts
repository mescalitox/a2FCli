import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-panel',
  templateUrl: './ui-panel.component.html',
  styleUrls: ['./ui-panel.component.css']
})
export class UiPanelComponent implements OnInit {

  @Input() divided: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
