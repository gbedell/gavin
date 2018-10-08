import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router' 
import { Tab } from '../../../models/tab.model';

@Component({
  selector: 'gavin-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownItemComponent implements OnInit {
  @Input() tab: Tab;

  constructor(private router: Router) { }

  ngOnInit() { }

  /**
   * Routes the tab's specified route.
   */
  goToRoute() {
    this.router.navigate(['/' + this.tab.route]);
  }

}
