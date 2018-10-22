import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LinksData } from '../../data/links.data';
import { Link } from '../../models/link.model';

@Component({
  selector: 'gavin-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LinksComponent implements OnInit {
  heading = 'Links';
  links: Link[] = [];
  intro =  `Here is a collection of links to anything that I've found interesting
   or has caught my attention.`;

  constructor() { }

  ngOnInit() {
    this.links = LinksData.getLinks();
  }

}
