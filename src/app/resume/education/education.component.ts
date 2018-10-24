import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Education } from '../../../models/education.model';

@Component({
  selector: 'gavin-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {
  @Input() education: Education;

  private dateFormat = 'MMMM yyyy';
  private present = 'Present';

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  get dateStarted(): String {
    return this.datePipe.transform(this.education.dateStarted, this.dateFormat);
  }

  get dateCompleted(): String {
    return this.education.dateCompleted == null ? this.present : this.datePipe.transform(this.education.dateCompleted, this.dateFormat);
  }

}
