import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Work } from '../../../models/work.model';

@Component({
  selector: 'gavin-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkComponent implements OnInit {
  @Input() work: Work;

  private dateFormat = 'MMMM yyyy';
  private present = 'Present';

  constructor(private datePipe: DatePipe) { }

  ngOnInit() { }

  get startDate(): String {
    return this.datePipe.transform(this.work.startDate, this.dateFormat);
  }

  get endDate(): String {
    return this.work.endDate == null ? this.present : this.datePipe.transform(this.work.endDate, this.dateFormat);
  }

}
