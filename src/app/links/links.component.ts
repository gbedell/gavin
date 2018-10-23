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
  intro =  `Here is a collection of links to anything that I've found interesting
   or has caught my attention.`;

  constructor(private linksService: LinksService) { }

  ngOnInit() {
    this.links = this.linksService.getLinks();
  }

}
