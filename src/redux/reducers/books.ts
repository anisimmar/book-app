import {ICommand} from "../actions/books";

export interface IBook {
    imgUrl: string,
    name: string,
    categories: string[],
    authors: string[],
}

export interface IState {
    items: IBook[],
    //isLoaded: boolean,
    searchQuery: string
}


const initialState: IState = {
    items: [],
    //isLoaded: false,
    searchQuery: ''
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
                items: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default books;