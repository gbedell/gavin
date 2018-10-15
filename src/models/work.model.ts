import { Job } from './job.model';

/**
 * A representation of work experience.
 */
export class Work {
    employer: String;
    employerImageUrl: String;
    location: String;
    jobs: Job[];
    startDate: Date;
    endDate: Date;
}
