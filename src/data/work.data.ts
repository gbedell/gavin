import { Injectable } from '@angular/core';
import { Work } from '../models/work.model';

@Injectable()
export class WorkData {

    public static workHistory: Work[] = [
        {
            employer: 'AT&T',
            employerImageUrl: '/assets/attglobe.png',
            jobs: [
                {
                    title: 'Sr Specialist-Software Engineer',
                    startDate: new Date('December 2017'),
                    endDate: null
                },
                {
                    title: 'Associate-Applications Developer',
                    startDate: new Date('September 2016'),
                    endDate: new Date('December 2017')
                },
                {
                    title: 'Technical Intern',
                    startDate: new Date('June 2016'),
                    endDate: new Date('August 2016')
                }
            ]
        },
        {
            employer: 'RainKing Solutions',
            employerImageUrl: null,
            jobs: [
                {
                    title: 'Senior Research Operations Analyst',
                    startDate: new Date('October 2015'),
                    endDate: new Date('May 2016')
                },
                {
                    title: 'Research Operations Analyst',
                    startDate: new Date('March 2015'),
                    endDate: new Date('October 2015')
                },
                {
                    title: 'Research Intern',
                    startDate: new Date('June 2014'),
                    endDate: new Date('March 2015')
                }
            ]
        }
    ];
}
