/* Pill test */
import React from 'react';
import { Pill } from '@occmundial/occ-atomic';

const pills = [
    {
        id:1,
        value:10,
        label:'foo'
    },
    {
        id:2,
        value:20,
        label:'bar'
    },
    {
        id:3,
        value:30,
        label:'baz'
    },
    {
        id:4,
        value:40,
        label:'qux'
    },
];


function onChange(value) {
    console.log(value);
}

export default function Example1() {
    return (
        <Pill
            label="Label"
            group={pills}
            assistiveText="Assistive Text"
            onChange={onChange}
        />
    );
}