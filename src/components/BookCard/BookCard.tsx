import React from "react";
import {Box, Image} from "@chakra-ui/react"
import {IBook} from "../../redux/reducers/books";

const BookCard = ({item}: { item: IBook }) => {

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mr={10} ml={10}>
            <Image/>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                </Box>

                <Box>
                    <Image src={item?.imgUrl ?? 'N/A'} alt='imageAlt' />
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