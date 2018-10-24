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
      dateFinished: new Date(2018, 9, 7)
    },
    {
      title: 'Measure What Matters',
      author: 'John Doerr',
      recommend: true,
      amazonLink: 'http://a.co/d/cPIIclZ',
      dateStarted: null,
      dateFinished: new Date(2018, 8, 27)
    },
    {
      title: `When the Wolves Bite: Two Billionaires, One Company
       and an Epic Wall Street Battle`,
      author: 'Scott Wapner',
      recommend: false,
      amazonLink: 'http://a.co/d/7b6hQjV',
      dateStarted: null,
      dateFinished: new Date(2018, 8, 18)
    },
    {
      title: `The Spider Network: The Wild Story of a Math Genius, a
       Gang of Backstabbing Bankers, and One of the Greatest Scams
       in Financial History`,
      author: 'David Enrich',
      recommend: false,
      amazonLink: 'http://a.co/d/epfWMIk',
      dateStarted: null,
      dateFinished: new Date(2018, 7, 21)
    },
    {
      title: `Accelerate: Building and Scaling High-Performing
       Technology Organizations`,
      author: 'Nicole Forsgren, Jez Humble, Gene Kim',
      recommend: false,
      amazonLink: 'http://a.co/d/hUMmFYy',
      dateStarted: null,
      dateFinished: new Date(2018, 7, 12)
    },
    {
      title: `The Innovator's Dilemma: The Revolutionary Book
       that Will Change the Way You Do Business`,
      author: 'Clayton M. Christensen',
      recommend: true,
      amazonLink: 'http://a.co/d/hKtJVem',
      dateStarted: null,
      dateFinished: new Date(2018, 7, 8)
    },
    {
      title: `Longitude: The True Story of a Lone Genius Who
       Solved the Greatest Scientific Problem Of His Time`,
      author: 'Dave Sobel',
      recommend: true,
      amazonLink: 'http://a.co/d/eAeXPaN',
      dateStarted: null,
      dateFinished: new Date(2018, 7, 8)
    },
    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      recommend: true,
      amazonLink: 'http://a.co/gbBADbn',
      dateStarted: new Date(2018, 5, 26),
      dateFinished: new Date(2018, 6, 4)
    },
    {
      title: 'Tiger Woods',
      author: 'Jeff Benedict, Armen Keteyian',
      recommend: true,
      amazonLink: 'http://a.co/d/bCrGxrx',
      dateStarted: new Date(2018, 5, 13),
      dateFinished: new Date(2018, 5, 27)
    },
    {
      title: `Skin in the Game: The Hidden Asymmetries
       in Daily Life`,
      author: 'Nassim Nicholas Taleb',
      recommend: false,
      amazonLink: 'http://a.co/d/e5gzGce',
      dateStarted: new Date(2018, 5, 5),
      dateFinished: new Date(2018, 5, 29)
    },
    {
      title: `Built to Last: Successful Habits of
       Visionary Companies`,
      author: 'Jim Collins, Jerry I. Porras',
      recommend: false,
      amazonLink: 'http://a.co/d/ip0BDa6',
      dateStarted: new Date(2018, 4, 14),
      dateFinished: new Date(2018, 4, 28)
    },
    {
      title: 'Thomas Jefferson and the Tripoli Pirates',
      author: 'Brian Kilmeade',
      recommend: false,
      amazonLink: 'http://a.co/d/crQmXD7',
      dateStarted: null,
      dateFinished: new Date(2018, 5, 21)
    },
    {
      title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
      author: 'John Carreyrou',
      recommend: true,
      amazonLink: 'http://a.co/d/dMiP8wM',
      dateStarted: new Date(2018, 5, 8),
      dateFinished: new Date(2018, 5, 22),
    },
    {
      title: 'Principles',
      author: 'Ray Dalio',
      recommend: true,
      amazonLink: 'http://a.co/0HI7ahX',
      dateStarted: new Date(2018, 0, 1),
      dateFinished: new Date(2018, 0, 14)
    },
    {
      title: `The Lean Startup: How Today's Entrepreneurs Use
       Continuous Innovation to Create Radically Successful
       Businesses`,
      author: 'Eric Ries',
      recommend: false,
      amazonLink: 'http://a.co/d/aePhTLO',
      dateStarted: new Date(2016, 7, 30),
      dateFinished: new Date(2016, 8, 21)
    }
  ];

  public getReadingIntro(): String {
    return this.readingIntro;
  }

  public getBooks(): Book[] {
    return this.books;
  }
}
