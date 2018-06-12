/* Button not aligned with an input */
import React from 'react';
import { Button, Input, Flexbox } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <Flexbox display="flex">
            <Input label="Input" />
                <Button size="sm">Not aligned button</Button>
        </Flexbox>
    ) 
}