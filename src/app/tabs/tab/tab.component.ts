import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Tab } from '../../../models/tab.model';

@Component({
  selector: 'gavin-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit {
  @Input() tab: Tab;

  constructor() { }

  ngOnInit() { }

}
