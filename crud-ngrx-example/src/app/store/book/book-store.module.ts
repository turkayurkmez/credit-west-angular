import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { bookReducer } from "./book.reducers";
import { EffectsModule } from "@ngrx/effects";
import { BooksEffects } from "./book.effects";

@NgModule({
    imports:[
        StoreModule.forFeature('book',bookReducer),
        EffectsModule.forFeature([BooksEffects])
    ]    
})
export class BookStoreModule{}