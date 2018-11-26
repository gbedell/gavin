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
  socialLinks: Social[];
  myName: String;
  descriptions: String[] = [];

  constructor(private meService: MeService) { }

  ngOnInit() {
    this.socialLinks = this.meService.getSocialLinks();
    this.myName = this.meService.getMyName();
    this.descriptions = this.meService.getDescriptions();
  }

}
