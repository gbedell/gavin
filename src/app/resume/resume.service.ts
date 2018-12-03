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
            imageUrl: 'umd.jpeg'
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Artificial Intelligence Nanodegree',
            dateStarted: new Date(2017, 5),
            dateCompleted: new Date(2017, 11),
            imageUrl: 'udacity.jpeg'
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Full Stack Web Developer Nanodegree',
            dateStarted: new Date(2015, 11),
            dateCompleted: new Date(2016, 3),
            imageUrl: 'udacity.jpeg'
        },
        {
            institution: 'Udacity',
            institutionImageUrl: '/assets/udacity.svg',
            degreeName: 'Intro to Programming Nanodegree',
            dateStarted: new Date(2015, 8),
            dateCompleted: new Date(2015, 10),
            imageUrl: 'udacity.jpeg'
        }
    ];

    private workHistory: Work[] = [
        {
            employer: 'AT&T',
            employerImageUrl: '/assets/attglobe.png',
            location: 'Dallas, TX',
            startDate: new Date(2016, 5),
            endDate: null,
            description: `Currently, I work as a Software Engineer supporting AT&T's Capabilities
             Evolution - the business unit responsible for all learning, training, and
             skills development within the company.
             In my role, I work as one of the lead developers and architects on a team developing
             and delivering a high-quality, easy-to-use web application and related services.
             My day-to-day responsibilities as a developer include programming of our REST
             API and front-end web application. As a developer, I'm a strong advocate for code
             simplicity, readability, reuseability, and test-driven development.
             As a lead developer on the team, I regularly collaborate with other team members
             on reviewing work and brainstorming solutions to issues that arise. Moreover, I'm
             a regular participant in the team's requirements planning, which we use to filter
             and prepare incoming features for the development team.
             As an architect, I actively monitor the performance of our applications and
             architecture across our various environments, and design, coordinate, and implement
             new solutions when needed.
            `,
            title: 'Software Engineer',
            imageUrl: 'att_globe.jpg'
        },
        {
            employer: 'RainKing Solutions',
            employerImageUrl: null,
            location: 'Bethesda, MD',
            startDate: new Date(2014, 5),
            endDate: new Date(2016, 4),
            description: `
            After graduating from college, I began working at RainKing Solutions,
             a SaaS company that offered sales intelligence on a variety of industries
             across the globe. While there, I worked on the Research Operations
             team, primarily tasked with evaluating existing workflows for opportunities for
             improvements, and subsequently designing and implementing new procedures when
             when needed. One simple improvement I made during my time there was converting
             our data scrubbing process from manual data entry to automated Excel macros.
             Consequently, our data collection productivity increased 10x while simultaneously
             improving data quality for our customers.`,
            title: 'Operations Analyst',
            imageUrl: 'rainking.jpeg'
        },
    ];

    private mainSkills: String[] = ['Java 8', 'JPA', 'Angular',
        'Jenkins', 'Maven', 'MySQL', 'Docker', 'Spring Boot', 'Linux', 'Python', 'CSS3', 'HTML5',
        'Git', 'REST'];

    private otherSkills: String[] = ['Tensorflow', 'Keras', 'Flask', 'Swift', 'MongoDB', 'PostgreSQL', 'AWS S3'];

    public getEducationHistory(): Education[] {
        return this.educationHistory.sort((a: Education, b: Education) => b.dateCompleted.getTime() - a.dateCompleted.getTime());
    }

    public getWorkHistory(): Work[] {
        return this.workHistory.sort((a: Work, b: Work) => b.startDate.getTime() - a.startDate.getTime());
    }

    public getMainSkills(): String[] {
        return this.mainSkills.sort();
    }

    public getOtherSkills(): String[] {
        return this.otherSkills.sort();
    }
}
