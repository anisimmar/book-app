import React from "react";
import {Box, Image, Container, Flex} from "@chakra-ui/react"
import {IBook} from "../../redux/reducers/books";

const BookCard = ({item}: { item: IBook }) => {

    return (
        <Box minW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mr={10} ml={10}>
            <Box p="6">

                <Box>
                    <Image src={item?.imgUrl ?? 'N/A'} alt='imageAlt'/>
                </Box>
                <Box color="gray.600" fontSize="sm">
                    Category: {item?.categories ?? 'N/A'}
                </Box>
                <Box color="gray.600" fontSize="sm">
                    Name: {item?.name ?? 'N/A'}
                </Box>
                <Box color="gray.600" fontSize="sm">
                    Author: {item?.authors ?? 'N/A'}
                </Box>
            </Box>
        </Box>
    )
}

export default BookCard