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
  sortedBooks: Book[] = [];

  constructor() { }

  ngOnInit() {
    this.readingInfo = ReadingData.readingIntro;
    this.books = ReadingData.books;

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
