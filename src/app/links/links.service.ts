import { Injectable } from '@angular/core';
import { Link } from '../../models/link.model';

@Injectable()
export class LinksService {

    private intro: String = `Here is a collection of links to anything that I've
     found useful or interesting - articles, resources, videos, etc.`;

    private links: Link[] = [
        {
            displayName: 'Autoprefixer - a PostCSS plugin',
            url: 'https://autoprefixer.github.io/',
            dateAdded: new Date(2018, 11, 21)
        },
        {
            displayName: 'A blog describing the AT&T-Udacity partnernship, where I\'m featured in the video',
            url: 'https://blog.udacity.com/2018/09/udacity-and-att-join-forces-to-train-workers-for-the-jobs-of-tomorrow.html',
            dateAdded: new Date(2018, 11, 21)
        },
        {
            displayName: 'Stripe Press',
            url: 'https://press.stripe.com/',
            dateAdded: new Date(2018, 11, 21)
        },
        {
            displayName: 'Marc Andreesen\'s Guide to Personal Productivity',
            url: 'https://pmarchive.com/guide_to_personal_productivity.html',
            dateAdded: new Date(2018, 11, 21)
        },
        {
            displayName: 'Joe Rogan Experience on fitness/nutrition with Dom D\'Agostino and Layne Norton',
            url: 'https://www.youtube.com/watch?v=u93oh9kC-rU',
            dateAdded: new Date(2018, 11, 21)
        },
        {
            displayName: 'The source code for this website!',
            url: 'https://github.com/gbedell/gavin',
            dateAdded: new Date(2018, 11, 21)
        },
        {
            displayName: 'Patrick Collison\'s bookshelf - the inspiration for mine',
            url: 'https://patrickcollison.com/bookshelf',
            dateAdded: new Date(2018, 11, 21)
        },
        {
            displayName: 'Andreesen Horowitz\'s AI Playbook - a great resource for understanding AI',
            url: 'http://aiplaybook.a16z.com/',
            dateAdded: new Date(2018, 11, 21)
        }
    ];

    /**
     * Returns the links sorted by dateAdded descending.
     */
    public getLinks(): Link[] {
        return this.links.sort((a: Link, b: Link) => {
            return a.dateAdded > b.dateAdded ? -1 : 1;
        });
    }

    /**
     * Returns the intro to be used on the links page.
     */
    public getIntro(): String {
        return this.intro;
    }
}
