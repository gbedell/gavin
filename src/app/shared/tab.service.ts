import { Injectable } from '@angular/core';

import { Tab } from '../../models/tab.model';

@Injectable()
export class TabService {

    private tabs: Tab[] = [
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

    public getTabs(): Tab[] {
        return this.tabs;
    }
}
