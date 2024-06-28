import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/ibook.interface';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private bookList: IBook[] = [
    {
      id: 1,
      name: 'Sample 1'
    },
    {
      id: 2,
      name: 'Sample 2'
    },
  ]

  getBooks(): Observable<IBook[]> {
    return of(this.bookList);
  }

  create(book: IBook): Observable<IBook> {
    this.bookList = [
      ...this.bookList,
      book
    ]
    return of(book);
  }

  update(updateBook: IBook): Observable<IBook> {
    this.bookList.map(book => book.id === updateBook.id ? updateBook : book);
    return of(updateBook);
  }

  delete(book: IBook): Observable<IBook> {
    this.bookList = this.bookList.filter(b => b.id !== book.id);
    return of(book);
  }
}