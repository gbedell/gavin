import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Education } from '../../../models/education.model';

@Component({
  selector: 'gavin-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {
  @Input() education: Education;

  constructor() { }

  ngOnInit() {
  }

}
