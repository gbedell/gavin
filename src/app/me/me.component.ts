import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Education } from '../../models/education.model';

@Component({
  selector: 'gavin-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  intro: string = `Some lame intro I have not come up with yet`;

  educations: Education[] = [
    {
      institution: "University of Maryland - College Park",
      institutionImageUrl: "/assets/umd.jpg",
      degreeName: "B.A. Economics",
      dateStarted: "August 2009",
      dateCompleted: "May 2014",
    },
    {
      institution: "Udacity",
      institutionImageUrl: "/assets/udacity.svg",
      degreeName: "Artificial Intelligence Nanodegree",
      dateStarted: "June 2017",
      dateCompleted: "December 2017",
    },
    {
      institution: "Udacity",
      institutionImageUrl: "/assets/udacity.svg",
      degreeName: "Full Stack Web Developer Nanodegree",
      dateStarted: "December 2015",
      dateCompleted: "April 2016",
    },
    {
      institution: "Udacity",
      institutionImageUrl: "/assets/udacity.svg",
      degreeName: "Intro to Programming Nanodegree",
      dateStarted: "September 2015",
      dateCompleted: "November 2015",
    }
  ]

}
