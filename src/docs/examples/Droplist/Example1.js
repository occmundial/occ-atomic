/* List items */
import React from 'react';
import { Droplist } from '@occmundial/occ-atomic';

export default function Example1() {
    const items = [
        { name: 'Item 1', secondary: '(10)' },
        { name: 'Item 2', secondary: '(5)' },
        { name: 'Item 3', secondary: '(30)' }
    ];
    return (
        <Droplist
            items={items}
            itemIdKey="name"
            itemTextKey="name"
            itemTextRightKey="secondary"
        />
    )
}