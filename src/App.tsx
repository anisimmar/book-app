import React from "react";
import Header from "./components/Header/Header";
import BookCard from "./components/BookCard/BookCard";
import { ChakraProvider, Center } from "@chakra-ui/react"
import axios from "axios";
import {Route} from "react-router-dom";
import Home from './pages/Home'

function App() {

    const [booksList, setBooksList] = React.useState([])
    const [countB, setCountB] = React.useState(null)

    return (
        <ChakraProvider>
            <div className="App">
                <Route path='/' component={Home} exact/>
            </div>
        </ChakraProvider>
    );
}

export default App;