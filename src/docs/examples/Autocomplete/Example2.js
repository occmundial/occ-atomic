/* Return the item on click */
import React from 'react';
import { Autocomplete } from '@occmundial/occ-atomic';

export default function Example2() {
    const items = [
        { name: 'Item 1', secondary: '(10)' },
        { name: 'Item 2', secondary: '(5)' },
        { name: 'Item 3', secondary: '(30)' }
    ];
    return (
        <Autocomplete
            droplistProps={{
                items:items,
                itemIdKey:"name",
                itemTextKey:"name",
                itemTextRightKey:"secondary"
            }}
            textfieldProps={{
                label:"Label",
                placeholder:"Placeholder",
                valueProp:"Item"
            }}
            onClick={(item) => {console.log(item);}}
        />
    );
}
