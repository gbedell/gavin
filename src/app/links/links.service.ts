import { Injectable } from '@angular/core';
import { Link } from '../../models/link.model';

@Injectable()
export class LinksService {

    private links: Link[] = [
        {
            displayName: 'Autoprefixer - a PostCSS plugin',
            url: 'https://autoprefixer.github.io/'
        },
        {
            displayName: 'Future Focused: Udacity and AT&T Join Forces to Train Workers for the Jobs of Tomorrow',
            url: 'https://blog.udacity.com/2018/09/udacity-and-att-join-forces-to-train-workers-for-the-jobs-of-tomorrow.html'
        },
        {
            displayName: 'Stripe Press',
            url: 'https://press.stripe.com/'
        },
        {
            displayName: 'Marc Andreesen\'s Guide to Personal Productivity',
            url: 'https://pmarchive.com/guide_to_personal_productivity.html'
        },
        {
            displayName: 'Joe Rogan Experience on fitness/nutrition with Dom D\'Agostino and Layne Norton',
            url: 'https://www.youtube.com/watch?v=u93oh9kC-rU'
        },
        {
            displayName: 'The source code for this website!',
            url: 'https://github.com/gbedell/gavin'
        }
    ];

    public getLinks(): Link[] {
        return this.links;
    }

}
