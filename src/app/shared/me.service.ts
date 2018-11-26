import { Injectable } from '@angular/core';

import { Social } from '../../models/social.model';

@Injectable()
export class MeService {

    private myName = 'Gavin Bedell';

    private socialLinks: Social[] = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/gavinbedell/',
            imageUrl: '/assets/social-icons/linkedin-32x32.png'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/gbedell',
            imageUrl: '/assets/social-icons/github-32x32.png'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/gavin.bedell',
            imageUrl: '/assets/social-icons/facebook-32x32.png'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/gmbedell',
            imageUrl: '/assets/social-icons/instagram-32x32.png'
        },
        {
            name: 'Gmail',
            url: 'mailto:gavin.bedell@gmail.com',
            imageUrl: '/assets/social-icons/gmail-32x32.png'
        }
    ];

    private intro1 = 'Hi, I\'m Gavin - welcome to my website.';

    private intro2 = `
    I live in Dallas and work at AT&T. I grew up on Long Island, NY and previously
     studied economics at the University of Maryland, and software engineering with
     Udacity.
    `;

    private intro3 = `
    Currently, my interests are across a wide spectrum, but include deep learning systems,
     fitness and nutrition, management and leadership, and financial markets.
    `;

    private iconAttributions: String[] = [
        `<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
         from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`,
        `<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy"
         title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"
          title="Flaticon">www.flaticon.com</a> is licensed by
           <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative
            Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`,
        `<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect"
         title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"
          title="Flaticon">www.flaticon.com</a> is licensed by
           <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative
            Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`,
        `<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
         from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`,
        `<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect"
         title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"
          title="Flaticon">www.flaticon.com</a> is licensed by
           <a href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`,
        `<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
         from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`
    ];

    public getMyName(): String {
        return this.myName;
    }

    public getSocialLinks(): Social[] {
        return this.socialLinks;
    }

    public getDescriptions(): String[] {
        const descriptions = [];
        descriptions.push(this.intro1);
        descriptions.push(this.intro2);
        descriptions.push(this.intro3);
        return descriptions;
    }
}
