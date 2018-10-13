import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
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
  // The dropdown items
  tabs: Tab[] = [];
  // The tab actively selected
  activeTab: Tab;
  // Just an actual representation of boolean: true
  true = true;
  // Toggles the dropdown
  @Input() dropdownExpanded = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.activeTab = this.getTab(event['url']);
      this.dropdownExpanded = false;
    });
    this.tabs = TabsData.tabs;
  }

  /**
   * Returns the tab for the specified url.
   * @param url the url
   */
  private getTab(url: String): Tab {
    for (const tab of TabsData.tabs) {
      if ('/' + tab.route === url) {
        return tab;
      }
    }
  }

  /**
   * Toggles the dropdown.
   */
  toggleDropdown() {
    this.dropdownExpanded = !this.dropdownExpanded;
  }

  goToRoute(tab: Tab) {
    this.router.navigate(['/' + tab.route]);
    this.toggleDropdown();

    console.log('dropdownExpanded: ' + this.dropdownExpanded);
  }
}
