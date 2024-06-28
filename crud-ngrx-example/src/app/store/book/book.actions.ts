import { createAction, props } from "@ngrx/store";
import { IBook } from "../../interfaces/ibook.interface";

const prefix = '[Books]';
export const getBooks = createAction(`${prefix} Get Books`);
export const getBooksSuccess = createAction(`${getBooks.type} Success`, props<{books: IBook[]; }>());

export const createBook = createAction(`${prefix} Create Book`, props<{ book: IBook; }>());
export const createBookSuccess = createAction(`${createBook.type} Success`, props<{ book: IBook; }>());

export const updateBook = createAction(`${prefix} Update Book`,props<{book: IBook; }>());
export const updateBookSuccess = createAction(`${updateBook.type} Success`, props<{book: IBook; }>());

export const deleteBook = createAction(`${prefix} Delete Book`,props<{book: IBook;}>());
export const deleteBookSuccess = createAction(`${deleteBook.type} Success`,props<{book: IBook;}>());


