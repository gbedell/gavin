import { Injectable } from '@angular/core';
import { Social } from '../models/social.model';

/**
 * Constants class to hold data about me.
 */
@Injectable()
export class MeData {

    public static myName = 'Gavin Bedell';

    public static socialLinks: Social[] = [
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
}
