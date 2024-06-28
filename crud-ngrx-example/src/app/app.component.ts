import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromBooks from './store/book'
import { Observable } from 'rxjs';
import { IBook } from './interfaces/ibook.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private readonly store: Store) {

    //notlar:
    //faydalanılan / önerilen demo:

    /*
      https://dev.to/codecraftjs/step-by-step-guide-for-ngrx-with-angular-16-30jd
      https://www.mediaclick.com.tr/blog/redux-nedir#:~:text=Redux%2C%20JavaScript%20uygulamalar%C4%B1nda%20durum%20y%C3%B6netimi,depo%20%C3%BCzerinden%20durum%20de%C4%9Fi%C5%9Fikliklerini%20y%C3%B6netir.
     */

   }

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }
  
  title = 'crud-ngrx-example';
  books$: Observable<IBook[]>
  isLoading$: Observable<boolean>


  createNewBook(name:string):void{
    this.store.dispatch(fromBooks.createBook({
      book:{
        id:Math.round(Math.random()*100),
        name:name
      }
    }));
  }

  updateExistingBook(book: IBook):void{
    console.log('updated');
    this.store.dispatch(fromBooks.updateBook({book}));
  }

  deleteBook(book: IBook):void{
    this.store.dispatch(fromBooks.deleteBook({book}));
  }

  initDispatch():void{
    this.store.dispatch(fromBooks.getBooks())
  }

  initSubscriptions():void{
    this.books$ = this.store.pipe(select(fromBooks.selectBookList));
    this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading));
  }
}
