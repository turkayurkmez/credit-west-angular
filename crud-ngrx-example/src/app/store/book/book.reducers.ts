import { on, createReducer, Action } from "@ngrx/store";
import { IBookState } from "./book.model";
import * as fromBooks from './index';

export const initalBookStore : IBookState = {
    isLoading: false,
    books:[]   
}

const reducer = createReducer<IBookState>(
    initalBookStore,
    on(fromBooks.getBooks,(state)=>{
        return {
            ...state,
            isLoading: true 
        };
    }),

    on(fromBooks.getBooksSuccess,(state, {books})=>{
        return {
            ...state,
            isLoading: false,
            books
        };
    }),

    on(fromBooks.createBook,(state)=>{
        return {
            ...state,
            isLoading: true,        
        };
    }),

    on(fromBooks.createBookSuccess,(state,{book})=>{
        return {
            ...state,
            books:[...state.books, book],
            isLoading: false,        
        };
    }),

    on(fromBooks.updateBook,(state, {book})=>{
        return {
            ...state,
            isLoading: true,
            books: state.books.map(b=>b.id===book.id ? book:b)       
        };
    }),

    on(fromBooks.updateBookSuccess,(state,{book})=>{
        return {
            ...state,
            books:state.books.map((b)=>b.id === book.id ? book: b),
            isLoading: false,        
        };
    }),

    on(fromBooks.deleteBook,(state)=>{
        return {
            ...state,
            isLoading: true,        
        };
    }),

    on(fromBooks.deleteBookSuccess,(state,{book})=>{
        return {
            ...state,
            books:state.books.filter((b)=>b.id !== book.id),
            isLoading: false,        
        };
    }),







    


)

export function bookReducer(state = initalBookStore, actions: Action): IBookState{
    return reducer(state,actions);
}


