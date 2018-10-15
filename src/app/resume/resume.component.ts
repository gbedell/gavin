import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Work } from '../../models/work.model';
import { Education } from '../../models/education.model';
import { WorkData } from '../../data/work.data';
import { EducationData } from '../../data/education.data';

@Component({
  selector: 'gavin-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
  heading = 'Resume';
  workHistory: Work[] = [];
  educationHistory: Education[] = [];

  constructor() { }

  ngOnInit() {
    this.workHistory = WorkData.workHistory;
    this.educationHistory = EducationData.educationHistory;
  }

}
