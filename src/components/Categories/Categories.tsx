import React from 'react';
import {Select} from "@chakra-ui/react";

const Categories = React.memo(function Categories({
                                                      categoriesNames,
                                                      onSelectCategory
                                                  }: { categoriesNames: any, onSelectCategory: any }) {

    const onSelectItem = (event: any) => {
        onSelectCategory(event.target.value)
    }
    return (
        <div className="categories">
            <Select placeholder="Category" mb={5} mr={5} ml={10} onChange={onSelectItem}>
                <option onClick={() => onSelectItem(null)}>All</option>
                {categoriesNames && categoriesNames.map((category: any, index: number) =>
                    <option key={`${category.value}`}
                            value={category.type}>
                        {category.name}
                    </option>)}
            </Select>
        </div>
    )
})

export default Categories;