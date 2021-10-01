import axios from "axios";
import {IBook} from "../reducers/books";
import {GBookAPIResponse} from "../../gBooksApiModels";

export type Func<T, TParam> = (param?: TParam) => T;
//export type Func = (param?: any) => any;

export interface ICommand {
    type: 'SET_LOADED' | 'SET_BOOKS' | 'SET_SORT_BY' | 'SET_CATEGORY' | 'RUN_SEARCH',
    payload: any
}

export const setLoaded = (value: string) => ({
    type: 'SET_LOADED',
    payload: value
} as ICommand)


export const setBooks = (items: IBook[]) => ({
    type: 'SET_BOOKS',
    payload: items
} as ICommand)

export const runSearch = (value: string) => ({
    type: 'RUN_SEARCH',
    payload: value
} as ICommand)

export const fetchBooks = (value: string) => (dispatch: Func<any, any>) => {
    //dispatch()

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
        .then(({data}) => {
            const result = data as any as GBookAPIResponse;
            const books = result.items.map(x => ({
                name: x.volumeInfo.title,
                categories: x.volumeInfo.categories,
                authors: x.volumeInfo.authors,
                imgUrl: x.volumeInfo.imageLinks?.smallThumbnail
            } as IBook));
            dispatch(setBooks(books));
        })
}