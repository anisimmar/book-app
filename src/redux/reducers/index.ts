import {combineReducers} from "redux";
import books from "./books";
import filters from "./filters";


const rootReducer = combineReducers({
    books,
    filters
})

export default rootReducer;