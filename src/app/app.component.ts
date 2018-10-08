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
  mobile: boolean = false;

  ngOnInit() {
    if (window.screen.width < 500) { // 768px portrait
      this.mobile = true;
    }

    this.myName = MeData.myName;
  }

}
