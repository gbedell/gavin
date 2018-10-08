import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'gavin-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit {
  @Input("displayName") displayName: String;

  @Input("route") route: String;

  constructor() { }

  ngOnInit() { }

}
