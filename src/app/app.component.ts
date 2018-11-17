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
  myName: String;

  constructor(
    private meService: MeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myName = this.meService.getMyName();
  }

}
