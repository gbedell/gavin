import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReadingData } from '../../data/reading.data';
import { Book } from '../../models/book.model';

@Component({
  selector: 'gavin-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReadingComponent implements OnInit {
  readingInfo: String;
  books: Book[] = [];

  constructor() { }

  ngOnInit() {
    this.readingInfo = ReadingData.readingIntro;
    this.books = ReadingData.books;
  }

  /**
   * Returns true if there are books to display.
   */
  public hasBooks(): boolean {
    return this.books.length > 0;
  }

}
