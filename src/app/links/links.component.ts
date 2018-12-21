import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { LinksService } from './links.service';
import { Link } from '../../models/link.model';

@Component({
  selector: 'gavin-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [LinksService]
})
export class LinksComponent implements OnInit {
  heading = 'Links';
  links: Link[] = [];
  intro: String;

  constructor(private linksService: LinksService) { }

  ngOnInit() {
    this.links = this.linksService.getLinks();
    this.intro = this.linksService.getIntro();
  }

}
