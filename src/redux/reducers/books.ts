import {fetchBooks, ICommand} from "../actions/books";

export interface IBook {
    imgUrl: string,
    name: string,
    categories: string[],
    authors: string[],
}

export interface IState {
    items: IBook[],
    //isLoaded: boolean,
    searchQuery: string,
    totalItems: number,
    pageSize: number,
    currentPage: number
}


const initialState: IState = {
    items: [],
    //isLoaded: false,
    searchQuery: '',
    pageSize: 30,
    totalItems: 0,
    currentPage: 0
}

const books = (state = initialState, action: ICommand) => {
    switch (action.type) {
        case 'RUN_SEARCH':
            return {
                ...state,
                searchQuery: action.payload
            }
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload.books,
                totalItems: action.payload.totalItems
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default books;