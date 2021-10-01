import React from 'react'
import {Center, Heading, Select, Flex, Input, Button} from "@chakra-ui/react"
import Categories from "../Categories/Categories";
import {useDispatch} from "react-redux";

const sortNames: string[] = [
    'Relevance',
    'Newest'
]

const getSort = sortNames.map((item, i) => <option key={i}>{item}</option>)

const Header = ({categoriesNames, onSearchClick, onChangeSearchInput}: { categoriesNames: string[], onSearchClick: any, onChangeSearchInput: any }) => {


    return (
        <div className="header">

            <div className="container">
                <Center h="400px" color="white" bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
                    <Heading as="h1" size="4xl">Search For Books</Heading>
                </Center>
                <Flex>
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder="Type to search" mt={5} mb={5} mr={10} ml={10}/>
                    <Button colorScheme="teal" variant="solid" mt={5} mb={5} mr={10}
                    onClick={onSearchClick}>
                        Search
                    </Button>
                </Flex>
                <Flex>
                    <Categories categoriesNames={categoriesNames}/>
                    <Select placeholder="Sorting" mb={5} mr={5} ml={10}>
                        {getSort}
                    </Select>
                </Flex>
            </div>
        </div>
    )
}


export default Header;