import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tab } from '../../models/tab.model';
import { TabsData } from '../../data/tabs.data';

@Component({
  selector: 'gavin-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  tabs: Tab[] = [];

  constructor() { }

  ngOnInit() {
    this.tabs = TabsData.tabs;
  }

}
