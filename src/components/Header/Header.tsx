import React from 'react'
import {Center, Heading, Select, Flex, Input, Button, Box} from "@chakra-ui/react"

const categoriesNames: string[] = [
    'Art',
    'Biography',
    'Computers',
    'History',
    'Medical',
    'Poetry'
]

const getCategories = () => {
    categoriesNames.map((item) => {
        return '<option>${item}</option>'
    })
}

const sortNames: string[] = [
    'Relevance',
    'Newest'
]

const getSort = () => {
    sortNames.map((item) => {
        return '<option>${item}</option>'
    })
}

const Header = () => {

    return (
        <div className="header">

            <div className="container">
                <Center h="400px" color="white" bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
                    <Heading as="h1" size="4xl">Search For Books</Heading>
                </Center>
                <Flex>
                    <Input placeholder="Type to search" mt={5} mb={5} mr={10} ml={10}/>
                    <Button colorScheme="teal" variant="solid" mt={5} mb={5} mr={10}>
                        Search
                    </Button>
                </Flex>
                <Flex>
                    <Select placeholder="Cathegory" mb={5} mr={5} ml={10}>
                        <option>All</option>
                        {getCategories}
                    </Select>

                    <Select placeholder="Sorting" mb={5} mr={5} ml={10}>
                        {getSort}
                    </Select>
                </Flex>

            </div>
        </div>
    )
}


export default Header;

//категории как и сортировку потом надо будет делать на redux