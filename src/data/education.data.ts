import { Injectable } from '@angular/core';
import { Education } from '../models/education.model';

@Injectable()
export class EducationData {

    public static educationHistory: Education[] = [
        {
            institution: 'University of Maryland - College Park',
            institutionImageUrl: '/assets/umd.jpg',
            degreeName: 'Bachelor of Arts, Economics',
            dateStarted: new Date('August 2009'),
            dateCompleted: new Date('May 2014'),
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Artificial Intelligence Nanodegree',
            dateStarted: new Date('June 2017'),
            dateCompleted: new Date('December 2017'),
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Full Stack Web Developer Nanodegree',
            dateStarted: new Date('December 2015'),
            dateCompleted: new Date('April 2016'),
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Intro to Programming Nanodegree',
            dateStarted: new Date('September 2015'),
            dateCompleted: new Date('November 2015'),
        }
    ];
}
