import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MeService } from '../shared/me.service';
import { TabService } from '../shared/tab.service';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'gavin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  activeTab: Tab;
  mobile = false;
  myName: String;
  tabs: Tab[];
  mobileTabsExpanded = false;

  constructor(
    private router: Router,
    private tabService: TabService,
    private meService: MeService) { }

  ngOnInit() {
    if (window.screen.width < 375) {
      this.mobile = true;
    }
    this.myName = this.meService.getMyName();
    this.tabs = this.tabService.getTabs();
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  onTabClick(isActiveTabClicked: boolean) {
    if (this.mobile) {
      this.mobileTabsExpanded = !this.mobileTabsExpanded;
    }
  }

}
