import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Work } from '../../../models/work.model';

@Component({
  selector: 'gavin-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkComponent implements OnInit {
  @Input() work: Work;

  constructor() { }

  ngOnInit() {
  }

}
