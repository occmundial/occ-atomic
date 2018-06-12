/* Simple SwitchGroup */
import React from 'react';
import { SwitchGroup } from 'r12-common';

export default function Example1() {
    const items = [
        { text:'Button 1', sec:'(10)' },
        { text:'Button 2', sec:'(5)' },
        { text:'Button 3', sec:'(35)' }
    ]
    return (
        <SwitchGroup buttons={items} />
    )
}