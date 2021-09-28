import axios from "axios";

export const setBooksList = value => ({
    type: 'SET_BOOKS_LIST',
    payload: value
})

export const fetchBooks = () => (dispatch) => {
    dispatch()

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=volvo`)
        .then(({data}) => {
            dispatch(setPizzas(data))
        })
}
