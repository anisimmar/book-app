import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../redux/actions/books";
import BookCard from "../components/BookCard/BookCard";


const categoryNames: string[] = [
    'Art',
    'Biography',
    'Computers',
    'History',
    'Medical',
    'Poetry']

const sortNames = [
    'Relevance',
    'Newest'
]

const Home = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchBooks())
    }, [])


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickItem={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType}
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(obj => <BookCard
                />) : Array(12).fill(0).map((_, index) => <LoadingPizzaBlock
                    key={index}
                />)}
            </div>
        </div>
    )
}

export default Home;