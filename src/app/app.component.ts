import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MeService } from './shared/me.service';

@Component({
  selector: 'gavin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class AppComponent implements OnInit {
  dropdownExpanded = false;
  mobile = false;
  myName: String;

  constructor(
    private meService: MeService,
    private router: Router
  ) { }

  ngOnInit() {
    if (window.screen.width < 500) { // 768px portrait
      this.mobile = true;
    }
    this.myName = this.meService.getMyName();
  }

  toggleDropdown() {
    this.dropdownExpanded = !this.dropdownExpanded;
  }

  onTabClicked(clicked: boolean) {
    if (clicked) { this.dropdownExpanded = false; }
  }

  goToHome() {
    this.router.navigate(['home']);
  }

}
