import axios from "axios";
import {IBook} from "../reducers/books";
import {GBookAPIResponse} from "../../gBooksApiModels";

export type Func<T, TParam> = (param?: TParam) => T;

//export type Func = (param?: any) => any;

export interface ICommand {
    type: 'SET_LOADED' | 'SET_BOOKS' | 'SET_SORT_BY' | 'SET_CATEGORY' | 'RUN_SEARCH' | 'SET_CURRENT_PAGE',
    payload: any
}

export const setLoaded = (value: string) => ({
    type: 'SET_LOADED',
    payload: value
} as ICommand)


export const setBooks = (payload: { books: IBook[], totalItems: number }) => ({
    type: 'SET_BOOKS',
    payload: payload
} as ICommand)

export const runSearch = (value: string) => ({
    type: 'RUN_SEARCH',
    payload: value
} as ICommand)

export const setCurrentPage = (value: number) => ({
    type: 'SET_CURRENT_PAGE',
    payload: value
} as ICommand)

export const fetchBooks = (value: string, currentPage: number, category?: string, sortBy?: string) => (dispatch: Func<any, any>) => {
    const pageSize = 30;
    const startIndex = currentPage * pageSize;

    console.log('page data query,', pageSize, ' ', currentPage)

    const sorting = sortBy ? `&orderBy=${sortBy}` : '';
    if (category) {
        value += ` subject:${category}`
    }


    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(value)}&startIndex=${startIndex}&maxResults=${pageSize}${sorting}`)
        .then(({data}) => {
            const result = data as any as GBookAPIResponse;
            const books = {
                books: result.items.map(x => ({
                    name: x.volumeInfo.title,
                    categories: x.volumeInfo.categories,
                    authors: x.volumeInfo.authors,
                    imgUrl: x.volumeInfo.imageLinks?.smallThumbnail
                } as IBook)),
                totalItems: result.totalItems
            };
            dispatch(setBooks(books));
        })
}
