import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'gavin-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  readingInfo: string = `Here is a list of books I've read - 
  starting with the most recent ones. Anything that I've found
  particularly good or interesting is bolded.`

  books: Book[] = [
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      recommend: true,
      amazonLink: "http://a.co/gbBADbn",
      dateStarted: new Date('Tuesday, June 26, 2018'),
      dateFinished: null
    },
    {
      title: "Principles",
      author: "Ray Dalio",
      recommend: true,
      amazonLink: "http://a.co/0HI7ahX",
      dateStarted: new Date('Monday, January 1, 2018'),
      dateFinished: null
    },
    {
      title: "Thomas Jefferson and the Tripoli Pirates",
      author: "Brian Kilmeade",
      recommend: false,
      amazonLink: null,
      dateStarted: null,
      dateFinished: null
    }
  ]


}
