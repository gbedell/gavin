import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tab } from '../../models/tab.model';
import { TabsData } from '../../data/tabs.data';

@Component({
  selector: 'gavin-tabs-dropdown',
  templateUrl: './tabs-dropdown.component.html',
  styleUrls: ['./tabs-dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsDropdownComponent implements OnInit {
  tabs: Tab[] = [];

  constructor() { }

  ngOnInit() {
    this.tabs = TabsData.tabs;
  }

}
