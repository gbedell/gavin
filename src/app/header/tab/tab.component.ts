import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { Tab } from '../../../models/tab.model';

@Component({
  selector: 'gavin-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [RouterLinkActive]
})
export class TabComponent implements OnInit {
  @Input() expand: boolean;
  @Input() tab: Tab;
  @Input() mobile: boolean;
  @Output() tabClicked = new EventEmitter<boolean>();
  hide = true;

  constructor(private routerLinkActive: RouterLinkActive) { }

  ngOnInit() {
  }

  onClick(isActiveTab: boolean) {
    this.tabClicked.emit(isActiveTab);
  }

}
