import React from 'react'
import {Center, Heading, Select, Flex, Input, Button, HStack} from "@chakra-ui/react"
import Categories from "../Categories/Categories";
import Sorting from "../Sorting/Sorting";
import {useDispatch} from "react-redux";

const sortNames: string[] = [
    'Relevance',
    'Newest'
]

const getSort = sortNames.map((item, i) => <option key={i}>{item}</option>)

const Header = ({
                    categoriesNames,
                    sortNames,
                    onSearchClick,
                    onChangeSearchInput,
                    onSelectCategory,
                    onSelectSortType
                }: { categoriesNames: any, onSearchClick: any, onChangeSearchInput: any, sortNames: any, onSelectCategory:any, onSelectSortType:any}) => {


    return (
        <div className="header">

            <div className="container">
                <Center h="400px" color="white" bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
                    <Heading as="h1" size="4xl">Search For Books</Heading>
                </Center>
                <Center>
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder="Type to search" mt={5} mb={5} mr={10} ml={10}/>
                    <Button colorScheme="teal" variant="solid" mt={5} mb={5} mr={10}
                            onClick={onSearchClick}>
                        Search
                    </Button>
                </Center>
                <Center>
                    <HStack spacing="60px">
                        <Categories categoriesNames={categoriesNames} onSelectCategory={onSelectCategory}/>
                        <Sorting sortNames={sortNames} onSelectSortType={onSelectSortType}/>
                    </HStack>
                </Center>
            </div>
        </div>
    );
}


export default Header;