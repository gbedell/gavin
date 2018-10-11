import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from '../../../models/tab.model';

@Component({
  selector: 'gavin-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownItemComponent implements OnInit {
  @Input() tab: Tab;
  @Input() default = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.default) {
      console.log('default tab' + this.tab.displayName);
    }
  }

  /**
   * Routes the tab's specified route.
   */
  goToRoute() {
    this.router.navigate(['/' + this.tab.route]);
  }

}
