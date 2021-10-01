import React from 'react';
import {Select} from "@chakra-ui/react";

const Categories = React.memo(function Categories({categoriesNames}: {categoriesNames: string[]}) {


    return (
        <div className="categories">
            <Select placeholder="Category" mb={5} mr={5} ml={10}>
                <option>All</option>
                {categoriesNames && categoriesNames.map((category: string) =>
                    <option key={`${category}`}>{category}
                    </option>)}
            </Select>
        </div>
    )
})

export default Categories;