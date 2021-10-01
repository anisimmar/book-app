import React from 'react';
import {Select} from "@chakra-ui/react";

const Sorting = React.memo(function Sorting({sortNames, onSelectSortType}: {sortNames: [], onSelectSortType: any}) {

    const onSelectItem = (event: any) => {
        onSelectSortType(event.target.value)
    }
    return (
        <div className="sorting">
            <Select placeholder="Sorting" mb={5} mr={5} ml={10} onChange={onSelectItem}>
                {sortNames && sortNames.map((obj: any) =>
                    <option
                        value={obj.type}
                        key={`${obj.name}_${obj.type}`}>
                        {obj.name}
                    </option>)}
            </Select>
        </div>
    )
})

export default Sorting;