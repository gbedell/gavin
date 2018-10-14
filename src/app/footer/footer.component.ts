import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gavin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  footerText = `Copyright © 2018 Gavin Bedell | All Rights Reserved`;

  constructor() { }

  ngOnInit() {
  }

}
