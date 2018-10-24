import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MeService } from '../shared/me.service';

@Component({
  selector: 'gavin-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeComponent implements OnInit {
  heading = 'About Me';
  description: String;

  constructor(private meService: MeService) { }

  ngOnInit() {
    this.description = this.meService.getMyDescription();
  }

}
