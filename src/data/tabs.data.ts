import { Injectable } from '@angular/core';
import { Tab } from '../models/tab.model';

/**
 * Holds data for tabs.
 */
@Injectable()
export class TabsData {

    public static tabs: Tab[] = [
        {
            displayName: 'Home',
            route: 'home'
        },
        {
            displayName: 'About',
            route: 'me'
        },
        {
            displayName: 'Resume',
            route: 'me'
        },
        {
            displayName: 'Bookshelf',
            route: 'bookshelf'
        }
    ];
}
