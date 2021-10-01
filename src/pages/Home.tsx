import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Center} from "@chakra-ui/react";

import BookCard from "../components/BookCard/BookCard";
import Header from "../components/Header/Header";
import {fetchBooks} from "../redux/actions/books";
import {IState} from "../redux/reducers/books";


const categoryNames: string[] = [
    'Art',
    'Biography',
    'Computers',
    'History',
    'Medical',
    'Poetry']

const sortNames = [
    {name: 'Relevance', type: 'relevance'},
    {name: 'Newest', type: 'newest'},
]

const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector(({books}: { books: IState }) => books.items);
    console.log ('items ', items)

    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (event: any /*React.ChangeEventHandler<HTMLInputElement>*/) => {
        setSearchValue(event.target.value);
    }

    const onSearchClick = () => {
        dispatch(fetchBooks(searchValue));
    }


    return (
        <div>
            <Header categoriesNames={categoryNames} onSearchClick={onSearchClick} onChangeSearchInput={onChangeSearchInput}/>
            <Center>Found 442 results</Center>
            {
            items && items.map((item, i) => <BookCard item={item} key={i}/>)
            }

        </div>
    )
}

export default Home;