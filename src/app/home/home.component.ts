import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Social } from '../../models/social.model';

@Component({
  selector: 'gavin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  socialLinks: Social[] = [
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/gavinbedell/",
      "imageUrl": "/assets/social-icons/linkedin-34px.png"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/gbedell",
      "imageUrl": "/assets/social-icons/GitHub-Mark-32px.png"
    },
    {
      "name": "Facebook",
      "url": "https://www.facebook.com/gavin.bedell",
      "imageUrl": "/assets/social-icons/f-ogo_RGB_HEX-58.png"
    }
  ]

  goToSocial(url: string) {
    window.open(url, "_blank");
  }

}
