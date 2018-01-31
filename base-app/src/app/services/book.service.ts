import { Injectable } from '@angular/core';
import { BookModel, BOOKS } from './book.nodel';


@Injectable()
export class BookService {
  private aBooks: Array<BookModel>;

  constructor() {
    this.aBooks = BOOKS;
  }

  getBooks() {
    return this.aBooks;
  }

  getBook(id: number | string) {
    return this.aBooks.find(book => book.id === +id);
  }
}
