import {ICommand} from "../actions/books";
import {IBook} from "./books";

const initialState = {
    category: null,
    sortBy: null,
}

export interface IFilter {
    category: any,
    sortBy: any
}

const filters = (state = initialState, action: ICommand) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default filters;