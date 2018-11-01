/* TextField with Dropdown */
import React from 'react';
import { TextField } from '@occmundial/occ-atomic';

const options = [
    {value:1, text:'foo', disabled: false},
    {value:2, text:'bar', disabled: true}
];

const options2 = [
    {
        key:1,
        grouped: true,
        label: 'Options',
        disabled: false,
        options: [
            {value:1, label:'foo'},
            {value:2, label:'bar'}
        ]
    },
    {
        key:2,
        grouped: true,
        label: 'More options',
        disabled: true,
        options: [
            {value:1, label:'baz'},
            {value:2, label:'qux'}
        ]
    },
];

export default function Example9() {
    return (
        <div>
            <TextField
                label="Simple dropdown"
                placeholder="Select an option"
                type="select"
                options={options}
                required
            />
            <TextField
                label="Grouped dropdown"
                placeholder="Select an option"
                type="select"
                options={options2}
                required
            />
        </div>
    );
}