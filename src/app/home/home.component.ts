import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MeData } from '../../data/me.data'
import { Social } from '../../models/social.model';

@Component({
  selector: 'gavin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  socialLinks: Social[] = [];

  constructor() { }

  ngOnInit() {
    this.socialLinks = MeData.socialLinks;
  }

  /**
   * Opens a new tab in the browser to the specified
   * url.
   * @param url the url to go to
   */
  public goToSocial(url: string) {
    window.open(url, '_blank');
  }

  /**
   * Returns true if there are socialLinks to display.
   */
  public hasSocialLinks(): boolean {
    return this.socialLinks.length > 0;
  }

}
