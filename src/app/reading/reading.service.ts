import { Injectable } from '@angular/core';

import { Book } from '../../models/book.model';

@Injectable()
export class ReadingService {

  private readingIntro = `Here is a list of books I've read -
   starting with the most recent. Anything that I've found
   particularly good or interesting is bolded.`;

  private books: Book[] = [
    {
      title: `Creative Selection: Inside Apple's Design Process
       During the Golden Age of Steve Jobs`,
      author: 'Ken Kocienda',
      recommend: false,
      amazonLink: `https://www.amazon.com/Creative-Selection-
      Inside-Apples-Process/dp/1250194466`,
      dateStarted: null,
      dateFinished: new Date('October 7, 2018')
    },
    {
      title: 'Measure What Matters',
      author: 'John Doerr',
      recommend: true,
      amazonLink: 'http://a.co/d/cPIIclZ',
      dateStarted: null,
      dateFinished: new Date('September 27, 2018')
    },
    {
      title: `When the Wolves Bite: Two Billionaires, One Company
       and an Epic Wall Street Battle`,
      author: 'Scott Wapner',
      recommend: false,
      amazonLink: 'http://a.co/d/7b6hQjV',
      dateStarted: null,
      dateFinished: new Date('September 18, 2018')
    },
    {
      title: `The Spider Network: The Wild Story of a Math Genius, a
       Gang of Backstabbing Bankers, and One of the Greatest Scams
       in Financial History`,
      author: 'David Enrich',
      recommend: false,
      amazonLink: 'http://a.co/d/epfWMIk',
      dateStarted: null,
      dateFinished: new Date('August 21, 2018')
    },
    {
      title: `Accelerate: Building and Scaling High-Performing
       Technology Organizations`,
      author: 'Nicole Forsgren, Jez Humble, Gene Kim',
      recommend: false,
      amazonLink: 'http://a.co/d/hUMmFYy',
      dateStarted: null,
      dateFinished: new Date('August 12, 2018')
    },
    {
      title: `The Innovator's Dilemma: The Revolutionary Book
       that Will Change the Way You Do Business`,
      author: 'Clayton M. Christensen',
      recommend: true,
      amazonLink: 'http://a.co/d/hKtJVem',
      dateStarted: null,
      dateFinished: new Date('August 8, 2018')
    },
    {
      title: `Longitude: The True Story of a Lone Genius Who
       Solved the Greatest Scientific Problem Of His Time`,
      author: 'Dave Sobel',
      recommend: true,
      amazonLink: 'http://a.co/d/eAeXPaN',
      dateStarted: null,
      dateFinished: new Date('August 8, 2018')
    },
    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      recommend: true,
      amazonLink: 'http://a.co/gbBADbn',
      dateStarted: new Date('June 26, 2018'),
      dateFinished: new Date('July 4, 2018')
    },
    {
      title: 'Tiger Woods',
      author: 'Jeff Benedict, Armen Keteyian',
      recommend: true,
      amazonLink: 'http://a.co/d/bCrGxrx',
      dateStarted: new Date('June 13, 2018'),
      dateFinished: new Date('June 27, 2018')
    },
    {
      title: `Skin in the Game: The Hidden Asymmetries
       in Daily Life`,
      author: 'Nassim Nicholas Taleb',
      recommend: false,
      amazonLink: 'http://a.co/d/e5gzGce',
      dateStarted: new Date('June 5, 2018'),
      dateFinished: new Date('June 29, 2018')
    },
    {
      title: `Built to Last: Successful Habits of
       Visionary Companies`,
      author: 'Jim Collins, Jerry I. Porras',
      recommend: false,
      amazonLink: 'http://a.co/d/ip0BDa6',
      dateStarted: new Date('May 14, 2018'),
      dateFinished: new Date('May 28, 2018')
    },
    {
      title: 'Thomas Jefferson and the Tripoli Pirates',
      author: 'Brian Kilmeade',
      recommend: false,
      amazonLink: 'http://a.co/d/crQmXD7',
      dateStarted: null,
      dateFinished: new Date('June 21, 2018')
    },
    {
      title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
      author: 'John Carreyrou',
      recommend: true,
      amazonLink: 'http://a.co/d/dMiP8wM',
      dateStarted: new Date('June 8, 2018'),
      dateFinished: new Date('June 22, 2018'),
    },
    {
      title: 'Principles',
      author: 'Ray Dalio',
      recommend: true,
      amazonLink: 'http://a.co/0HI7ahX',
      dateStarted: new Date('January 1, 2018'),
      dateFinished: new Date('January 14, 2018')
    },
    {
      title: `The Lean Startup: How Today's Entrepreneurs Use
       Continuous Innovation to Create Radically Successful
       Businesses`,
      author: 'Eric Ries',
      recommend: false,
      amazonLink: 'http://a.co/d/aePhTLO',
      dateStarted: new Date('August 30, 2016'),
      dateFinished: new Date('September 21, 2016')
    }
  ];

  public getReadingIntro(): String {
    return this.readingIntro;
  }

  public getBooks(): Book[] {
    return this.books;
  }
}
