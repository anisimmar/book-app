const initialState = {
    items:[]
}

const books = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS_LIST':
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}

export default books;