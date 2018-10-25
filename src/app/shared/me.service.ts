import { Injectable } from '@angular/core';

import { Social } from '../../models/social.model';

@Injectable()
export class MeService {

    private myName = 'Gavin Bedell';

    private socialLinks: Social[] = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/gavinbedell/',
            imageUrl: '/assets/social-icons/linkedin-34px.png'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/gbedell',
            imageUrl: '/assets/social-icons/GitHub-Mark-32px.png'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/gavin.bedell',
            imageUrl: '/assets/social-icons/f-ogo_RGB_HEX-58.png'
        }
    ];

    private myDescription: String = `
    Welcome to my website. I currently live in Dallas, TX, but I was born and raised on
     Long Island, NY. I attended the University of Maryland (College Park), graduating
     in 2014 with a B.A. in Economics. By trade, I am a Software Engineer, which I love
     doing even in my spare time (as this website is hopefully evidence of). Besides doing
     that, I like to keep myself busy by staying active - golf, volleyball, basketball,
     weight-lifting, running - and trying to read as much as I can.`;

    public getMyName(): String {
        return this.myName;
    }

    public getSocialLinks(): Social[] {
        return this.socialLinks;
    }

    public getMyDescription(): String {
        return this.myDescription;
    }
}
