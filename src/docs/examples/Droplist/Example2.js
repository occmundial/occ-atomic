/* List groups */
import React from 'react';
import { Droplist } from 'r12-common';

export default function Example1() {
    const items = [
        {
            group:'Group 1',
            items: [
                { name: 'Item 1', secondary: '(10)' },
                { name: 'Item 2', secondary: '(5)' },
                { name: 'Item 3', secondary: '(30)' }
            ]
        },
        {
            group:'Group 2',
            items: [
                { name: 'Item 4', secondary: '(25)' }
            ]
        }
    ];
    return (
        <Droplist 
            items={items}
            groups
            groupIdKey="group"
            groupNameKey="group"
            groupItemsKey="items"
            itemIdKey="name"
            itemTextKey="name"
            itemTextRightKey="secondary"
        />
    )
}