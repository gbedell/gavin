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
            description: `Currently, I am a Software Engineer supporting AT&T's Capabilities
             Evolution - the business unit responsible for all learning, training, and
             skills development within the company. In my role, I am a part of an Agile team
             of full-stack developers working together to deliver a high-quality, easy to use
             web application. My main responsibilities include Java development on
             our REST API, which we use to serve clients throughout our application
             ecosystem. Moreover, I have an active role in our application archicture,
             deployment process, and requirements planning.`,
            title: 'Software Engineer',
            imageUrl: 'att_globe.jpg'
        },
        {
            employer: 'RainKing Solutions',
            employerImageUrl: null,
            location: 'Bethesda, MD',
            startDate: new Date(2014, 5),
            endDate: new Date(2016, 4),
            description: `While at RainKing - an enterprise software company that offered
             sales intelligence through its web application - I worked on the Research Operations
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

    private mainSkills: String[] = ['Java 8', 'Java Persistence API (JPA)', 'Angular',
        'Jenkins', 'Maven', 'MySQL', 'Docker', 'Spring Boot', 'Linux', 'Python', 'CSS3', 'HTML5',
        'Git', 'REST'];

    private otherSkills: String[] = ['Tensorflow', 'Keras', 'Flask', 'Swift', 'MongoDB', 'PostgreSQL'];

    public getEducationHistory(): Education[] {
        return this.educationHistory;
    }

    public getWorkHistory(): Work[] {
        return this.workHistory;
    }

    public getMainSkills(): String[] {
        return this.mainSkills;
    }

    public getOtherSkills(): String[] {
        return this.otherSkills;
    }
}
