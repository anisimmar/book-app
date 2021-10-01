import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Center, Flex, Grid} from "@chakra-ui/react";

import BookCard from "../components/BookCard/BookCard";
import Header from "../components/Header/Header";
import {fetchBooks} from "../redux/actions/books";
import {IState} from "../redux/reducers/books";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {IFilter} from "../redux/reducers/filters";


const categoryNames = [
    {name: 'Art', type: 'art'},
    {name: 'Biography', type: 'biography'},
    {name: 'Computers', type: 'computers'},
    {name: 'History', type: 'history'},
    {name: 'Medical', type: 'medical'},
    {name: 'Poetry', type: 'poetry'},
]

const sortNames = [
    {name: 'Relevance', type: 'relevance'},
    {name: 'Newest', type: 'newest'},
]

const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector(({books}: { books: IState }) => books.items);
    const {category, sortBy} = useSelector(({filters} : {filters: IFilter}) => filters);

    const totalItems = useSelector(({books}: { books: IState }) => books.totalItems);
    console.log ('items ', items)

    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (event: any /*React.ChangeEventHandler<HTMLInputElement>*/) => {
        setSearchValue(event.target.value);
    }

    const onSearchClick = () => {
        dispatch(fetchBooks(searchValue, sortBy, category));
    }

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])


    return (
        <div>
            <Header
                categoriesNames={categoryNames}
                sortNames={sortNames}
                onSearchClick={onSearchClick}
                onChangeSearchInput={onChangeSearchInput}
                onSelectCategory={onSelectCategory}
                onSelectSortType={onSelectSortType}
            />
            <Center pt={5}>Found {totalItems} results</Center>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} pt={10}>
            {
            items && items.map((item, i) => <BookCard item={item} key={i}/>)
            }

            </Grid>
        </div>
    )
}

export default Home;