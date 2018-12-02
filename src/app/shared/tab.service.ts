import { Injectable } from '@angular/core';

import { Tab } from '../../models/tab.model';

@Injectable()
export class TabService {

    private tabs: Tab[] = [
        {
            displayName: 'About Me',
            route: 'me',
            order: 1
        },
        {
            displayName: 'Resume',
            route: 'resume',
            order: 3
        },
        {
            displayName: 'Bookshelf',
            route: 'bookshelf',
            order: 4
        },
        {
            displayName: 'Links',
            route: 'links',
            order: 5
        },
        {
            displayName: 'Projects',
            route: 'projects',
            order: 2
        }
    ];

    /**
     * Returns the tabs sorted by order.
     */
    public getTabs(): Tab[] {
        return this.tabs.sort((a: Tab, b: Tab) => a.order - b.order);
    }
}
