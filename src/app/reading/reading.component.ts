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

  constructor(private readingService: ReadingService) { }

  ngOnInit() {
    this.readingInfo = this.readingService.getReadingIntro();
    this.books = this.readingService.getBooks();
  }

  getImage(book: Book) {
    return 'assets/books/' + book.imageUrl;
  }

}
