/* Button not aligned with an input */
import React from 'react';
import { Button, Input, Flexbox } from 'r12-common';

export default function Example2() {
    return (
        <Flexbox display="flex">
            <Input label="Input" />
                <Button size="sm">Not aligned button</Button>
        </Flexbox>
    ) 
}