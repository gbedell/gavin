import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Tab } from '../../../models/tab.model';

@Component({
  selector: 'gavin-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownItemComponent implements OnInit {
  @Input() tab: Tab;

  constructor() { }

  ngOnInit() { }

}
