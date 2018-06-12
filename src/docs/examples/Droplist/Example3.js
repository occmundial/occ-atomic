/* Return object to console on click */
import React from 'react';
import { Droplist } from '@occmundial/occ-atomic';

export default function Example3() {
    const items = [
        { name: 'Item 1', secondary: '(10)', someData:'1234567890' },
    ];
    return (
        <Droplist
            items={items}
            itemIdKey="name"
            itemTextKey="name"
            itemTextRightKey="secondary"
            onClick={(item) => {console.log(item);}}
        />
    )
}