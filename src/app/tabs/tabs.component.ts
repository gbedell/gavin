import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'gavin-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  tabs: Tab[] = [
    {
      displayName: 'Home',
      route: 'home'
    },
    {
      displayName: 'About',
      route: 'me'
    },
    {
      displayName: 'Resume',
      route: 'me'
    },
    {
      displayName: 'Bookshelf',
      route: 'bookshelf'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
