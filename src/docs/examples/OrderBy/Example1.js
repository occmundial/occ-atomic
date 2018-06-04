/* OrderBy */
import React from 'react';
import { OrderBy } from 'r12-common';

export default function Example1() {
    const options = [
        {value:1, text:'Price'},
        {value:2, text:'Date'},
        {value:3, text:'Name'}
    ];
    return (
        <OrderBy text="Order by:" options={options} />
    )
}