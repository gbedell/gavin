import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Tab } from '../../models/tab.model';
import { TabService } from '../shared/tab.service';

@Component({
  selector: 'gavin-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  tabs: Tab[] = [];

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.tabs = this.tabService.getTabs();
  }

}
