import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  myName: String;
  tabs: Tab[];

  constructor(
    private tabService: TabService,
    private meService: MeService) { }

  ngOnInit() {
    this.myName = this.meService.getMyName();
    this.tabs = this.tabService.getTabs();
  }

}
