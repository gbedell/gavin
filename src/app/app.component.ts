import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MeData } from '../data/me.data';

@Component({
  selector: 'gavin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  myName: String;

  ngOnInit() {
    this.myName = MeData.myName;
  }

}
