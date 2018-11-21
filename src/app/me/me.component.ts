import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MeService } from '../shared/me.service';
import { Social } from '../../models/social.model';

@Component({
  selector: 'gavin-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeComponent implements OnInit {
  heading = 'About Me';
  description: String;
  socialLinks: Social[];
  myName: String;

  constructor(private meService: MeService) { }

  ngOnInit() {
    this.description = this.meService.getMyDescription();
    this.socialLinks = this.meService.getSocialLinks();
    this.myName = this.meService.getMyName();
  }

}
