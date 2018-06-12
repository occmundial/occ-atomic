/* Input with error */
import React from 'react';
import { Input } from 'r12-common';

export default function Example7() {
    return (
        <Input
            label="Label"
            placeholder="Focus and blur the input to show the error"
            error="Input with error"
        />
    )
}