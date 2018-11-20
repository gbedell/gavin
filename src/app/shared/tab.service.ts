import { Injectable } from '@angular/core';

import { Tab } from '../../models/tab.model';

@Injectable()
export class TabService {

    private tabs: Tab[] = [
        {
            displayName: 'About Me',
            route: 'me'
        },
        {
            displayName: 'Resume',
            route: 'resume'
        },
        {
            displayName: 'Bookshelf',
            route: 'bookshelf'
        },
        {
            displayName: 'Links',
            route: 'links'
        }
    ];

    public getTabs(): Tab[] {
        return this.tabs;
    }
}
