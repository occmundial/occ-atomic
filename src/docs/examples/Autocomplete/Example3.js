/* Stack on labels */
import React from 'react';
import { Autocomplete } from 'r12-common';

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
            inputProps={{
                label:"Label",
                placeholder:"Placeholder",
                valueProp:"Item"
            }}
            stackLabels
            limit={2}
            limitPlaceholder="You can't stack more labels"
            onClick={(items) => {console.log(items);}}
        />
    )
}