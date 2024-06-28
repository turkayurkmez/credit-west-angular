import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "src/app/services/book.service";
import  * as fromBooks  from "./index";
import { map, switchMap } from "rxjs";
import { IBook } from "src/app/interfaces/ibook.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class BooksEffects{
    constructor(private readonly actions$: Actions,
                private readonly bookService: BookService){

    }

    getBooks$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fromBooks.getBooks),
        switchMap(() => this.bookService.getBooks()),
        map((books: IBook[]) => fromBooks.getBooksSuccess({books}))
    )
);

createBook$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fromBooks.createBook),
        switchMap(({book}) => this.bookService.create(book)),
        map((book: IBook) => fromBooks.createBookSuccess({book}))
    )
);

updateBook$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fromBooks.updateBook),
        switchMap(({book}) => this.bookService.update(book)),
        map((book: IBook) => fromBooks.updateBookSuccess({book}))
    )
);

deleteBook$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fromBooks.deleteBook),
        switchMap(({book}) => this.bookService.delete(book)),
        map((book: IBook) => fromBooks.deleteBookSuccess({book}))
    )
);
}