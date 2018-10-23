import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Book } from '../../models/book.model';
import { ReadingService } from './reading.service';

@Component({
  selector: 'gavin-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ReadingService]
})
export class ReadingComponent implements OnInit {
  books: Book[] = [];
  heading = 'Bookshelf';
  readingInfo: String;
  sortedBooks: Book[] = [];

  constructor(private readingService: ReadingService) { }

  ngOnInit() {
    this.readingInfo = this.readingService.getReadingIntro();
    this.books = this.readingService.getBooks();

    // Sort the books
    if (this.hasBooks) { this.sortedBooks = this.sortBooks(this.books); }
  }

  /**
   * Returns true if there are books to display.
   */
  public hasBooks(): boolean {
    return this.books.length > 0;
  }

  /**
   * Returns a sorted list of books by dateFinished descending.
   * @param books the sorted books
   */
  private sortBooks(books: Book[]) {
    return books.sort((a: Book, b: Book) =>
      new Date(b.dateFinished).getTime() - new Date(a.dateFinished).getTime()
    );
  }

}
