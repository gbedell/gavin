import { Injectable } from '@angular/core'
import { Book } from '../models/book.model';

/**
 * Constants class to hold my reading data.
 */
@Injectable()
export class ReadingData {

  public static readingIntro = `Here is a list of books I've read - 
  starting with the most recent. Anything that I've found 
  particularly good or interesting is bolded.`;

  public static books: Book[] = [
    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      recommend: true,
      amazonLink: 'http://a.co/gbBADbn',
      dateStarted: new Date('Tuesday, June 26, 2018'),
      dateFinished: null
    },
    {
      title: 'Thomas Jefferson and the Tripoli Pirates',
      author: 'Brian Kilmeade',
      recommend: false,
      amazonLink: null,
      dateStarted: null,
      dateFinished: null
    },
    {
      title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
      author: 'John Carreyrou',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Bad-Blood-Secrets-Silicon-Startup/dp/152473165X/',
      dateStarted: null,
      dateFinished: null,
    },
    {
      title: 'Principles',
      author: 'Ray Dalio',
      recommend: true,
      amazonLink: 'http://a.co/0HI7ahX',
      dateStarted: new Date('Monday, January 1, 2018'),
      dateFinished: null
    }
  ]

}