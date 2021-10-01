import React from 'react';
import {Select} from "@chakra-ui/react";

const Sorting = React.memo(function Sorting({sortNames}: {sortNames: []}) {


    return (
        <div className="categories">
            <Select placeholder="Sorting" mb={5} mr={5} ml={10}>
                {sortNames && sortNames.map((obj: any) =>
                    <option key={`${obj.name}_${obj.type}`}>{obj.name}
                    </option>)}
            </Select>
        </div>
    )
})

export default Sorting;