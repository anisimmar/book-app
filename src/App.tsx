import React from "react";
import Header from "./components/Header/Header";
import BookCard from "./components/BookCard/BookCard";
import { ChakraProvider, Center } from "@chakra-ui/react"
import axios from "axios";
import {Route} from "react-router-dom";
import Home from './pages/Home'

function App() {

    const [booksList, setBooksList] = React.useState([])
    const [countB, setCountB] = React.useState([])

    axios.get('https://www.googleapis.com/books/v1/volumes?q=volvo')
        .then((response) => {
            console.log(response.data);
            console.log(response.data.totalItems)
            //setCountB(response.data.totalItems)
        });

    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <Header/>
                    <Center>Found {countB} results</Center>
                    <div>
                        {booksList}
                    </div>
                    <BookCard/>
                </header>
                <Route path='/' component={Home} exact/>
            </div>
        </ChakraProvider>
    );
}

export default App;