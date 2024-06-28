import { IBook } from "../../interfaces/ibook.interface";

export interface IBookState
{
    books: IBook[];
    isLoading: boolean;
}