import {ICommand} from "./books";

export const setSortBy = (name: string) => ({
    type: 'SET_SORT_BY',
    payload: name
} as ICommand)

export const setCategory = (catIndex: number) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
} as ICommand)