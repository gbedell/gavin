import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Work } from '../../models/work.model';
import { Education } from '../../models/education.model';
import { ResumeService } from './resume.service';

@Component({
  selector: 'gavin-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ResumeService]
})
export class ResumeComponent implements OnInit {
  heading = 'Resume';
  educationHistory: Education[] = [];
  workHistory: Work[] = [];
  mainSkills: String[] = [];
  otherSkills: String[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.workHistory = this.resumeService.getWorkHistory();
    this.educationHistory = this.resumeService.getEducationHistory();
    this.mainSkills = this.resumeService.getMainSkills();
    this.otherSkills = this.resumeService.getOtherSkills();
  }

}
