import { Injectable } from '@angular/core';

import { Education } from '../../models/education.model';
import { Work } from '../../models/work.model';

@Injectable()
export class ResumeService {

    private educationHistory: Education[] = [
        {
            institution: 'University of Maryland - College Park',
            institutionImageUrl: '/assets/umd.jpg',
            degreeName: 'Bachelor of Arts, Economics',
            dateStarted: new Date(2009, 7),
            dateCompleted: new Date(2014, 4),
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Artificial Intelligence Nanodegree',
            dateStarted: new Date(2017, 5),
            dateCompleted: new Date(2017, 11),
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Full Stack Web Developer Nanodegree',
            dateStarted: new Date(2015, 11),
            dateCompleted: new Date(2016, 3),
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Intro to Programming Nanodegree',
            dateStarted: new Date(2015, 8),
            dateCompleted: new Date(2015, 10),
        }
    ];

    private workHistory: Work[] = [
        {
            employer: 'AT&T',
            employerImageUrl: '/assets/attglobe.png',
            location: 'Dallas, TX',
            startDate: new Date(2016, 5),
            endDate: null,
            jobs: [
                {
                    title: 'Sr Specialist-Software Engineer',
                    startDate: new Date(2017, 11),
                    endDate: null
                },
                {
                    title: 'Associate-Applications Developer',
                    startDate: new Date(2016, 8),
                    endDate: new Date(2017, 11)
                },
                {
                    title: 'Technical Intern',
                    startDate: new Date(2016, 5),
                    endDate: new Date(2016, 7)
                }
            ],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing
             elit. Sed sollicitudin cursus dolor ut tristique. Quisque ornare,
              quam ac maximus aliquam, sem purus sodales quam, a sollicitudin
               leo sapien vitae enim. Mauris tincidunt ligula est, tempus viverra
                velit fermentum id. Sed eu cursus risus. Curabitur ac augue sed
                 libero posuere finibus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed ultrices ligula id ante imperdiet, eget
                   elementum sem volutpat.`,
            title: 'Software Engineer'
        },
        {
            employer: 'RainKing Solutions',
            employerImageUrl: null,
            location: 'Bethesda, MD',
            startDate: new Date(2014, 5),
            endDate: new Date(2016, 4),
            jobs: [
                {
                    title: 'Senior Research Operations Analyst',
                    startDate: new Date(2015, 9),
                    endDate: new Date(2016, 4)
                },
                {
                    title: 'Research Operations Analyst',
                    startDate: new Date(2015, 2),
                    endDate: new Date(2015, 9)
                },
                {
                    title: 'Research Intern',
                    startDate: new Date(2014, 5),
                    endDate: new Date(2015, 2)
                }
            ],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Suspendisse sit amet ante eu sapien rutrum pretium sed a augue.
              Mauris pulvinar ultrices quam ut tincidunt. Curabitur pharetra
               diam odio, non luctus ex pellentesque at. Donec imperdiet pulvinar
                urna, vel ultricies nunc. Suspendisse dui urna, varius nec magna
                 nec, ullamcorper ultrices sem. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                   Maecenas id augue sagittis, egestas magna eget, ullamcorper sem.
                    Mauris finibus orci leo, nec elementum justo pulvinar in.`,
            title: 'Operations Analyst'
        },
    ];

    public getEducationHistory(): Education[] {
        return this.educationHistory;
    }

    public getWorkHistory(): Work[] {
        return this.workHistory;
    }
}
