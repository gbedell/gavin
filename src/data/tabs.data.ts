import { Injectable } from '@angular/core';
import { Tab } from '../models/tab.model';

/**
 * Holds data for tabs.
 */
@Injectable()
export class TabsData {

    public static tabs: Tab[] = [
        {
            displayName: 'HOME',
            route: 'home'
        },
        {
            displayName: 'ABOUT',
            route: 'me'
        },
        {
            displayName: 'RESUME',
            route: 'resume'
        },
        {
            displayName: 'BOOKSHELF',
            route: 'bookshelf'
        },
        {
            displayName: 'LINKS',
            route: 'links'
        }
    ];
}
