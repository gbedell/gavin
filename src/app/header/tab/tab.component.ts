import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Tab } from '../../../models/tab.model';

@Component({
  selector: 'gavin-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit {
  @Input() expand: boolean;
  @Input() tab: Tab;
  @Input() mobile: boolean;
  @Output() tabClicked = new EventEmitter<boolean>();
  hide = true;
  active = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.active = false;
      if (event['url'] === this.formatTabRoute(this.tab.route)) {
        this.active = !this.active;
      }
    });
  }

  onClick(isActiveTab: boolean) {
    this.tabClicked.emit(isActiveTab);
  }

  private formatTabRoute(tabRoute: String) {
    return '/' + tabRoute;
  }

}
