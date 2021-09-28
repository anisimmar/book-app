import React from "react";
import {Box, Image} from "@chakra-ui/react"

const BookCard = () => {
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


                <Box color="gray.600" fontSize="sm">
                    Category
                </Box>
                <Box color="gray.600" fontSize="sm">
                    Name
                </Box>
                <Box color="gray.600" fontSize="sm">
                    Author
                </Box>

            </Box>
        </Box>
    )
}

//выгрузку книг можно делать с помощью метода мап и отдавать нужные данные в компоненту

export default BookCard