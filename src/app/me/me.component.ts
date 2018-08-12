import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Education } from '../../models/education.model';
import { Work } from '../../models/work.model';

@Component({
  selector: 'gavin-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeComponent implements OnInit {
  showEducation = true;
  showWork = true;

  intro = `Some lame intro I have not come up with yet`;

  educations: Education[] = [
    {
      institution: 'University of Maryland - College Park',
      institutionImageUrl: '/assets/umd.jpg',
      degreeName: 'Bachelor of Arts, Economics',
      dateStarted: 'August 2009',
      dateCompleted: 'May 2014',
    },
    {
      institution: 'Udacity',
      institutionImageUrl: '/assets/udacity.svg',
      degreeName: 'Artificial Intelligence Nanodegree',
      dateStarted: 'June 2017',
      dateCompleted: 'December 2017',
    },
    {
      institution: 'Udacity',
      institutionImageUrl: '/assets/udacity.svg',
      degreeName: 'Full Stack Web Developer Nanodegree',
      dateStarted: 'December 2015',
      dateCompleted: 'April 2016',
    },
    {
      institution: 'Udacity',
      institutionImageUrl: '/assets/udacity.svg',
      degreeName: 'Intro to Programming Nanodegree',
      dateStarted: 'September 2015',
      dateCompleted: 'November 2015',
    }
  ];

  works: Work[] = [
    {
      employer: 'AT&T',
      employerImageUrl: null,
      title: 'Sr Specialist-Software Engineer',
      startDate: null,
      endDate: null
    // },
    // {
    //   employer: 'RainKing Solutions',
    //   employerImageUrl: null,
    //   title: 'Senior Research Operations Analyst',
    //   startDate: null,
    //   endDate: null
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleEducation() {
    this.showEducation = !this.showEducation;
  }

}
