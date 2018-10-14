import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() expandDropdown = false;
  @Output() tabClicked = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit() {
    this.tabs = TabsData.tabs;
  }

  goToRoute(tab: Tab) {
    this.tabClicked.emit(true);
    this.router.navigate(['/' + tab.route]);
  }
}
