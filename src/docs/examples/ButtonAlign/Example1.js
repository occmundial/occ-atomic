import React from 'react';
import { ButtonAlign, Button, Input, Flexbox } from 'r12-common';

/* Sizes */
export default function Example1() {
    return (
        <Flexbox display="flex">
            <Input label="Input" />
            <ButtonAlign size="sm">
                <Button size="sm">Aligned button</Button>
            </ButtonAlign>
        </Flexbox>
    ) 
}