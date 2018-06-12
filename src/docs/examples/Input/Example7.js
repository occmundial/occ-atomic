/* Input with error */
import React from 'react';
import { Input } from '@occmundial/occ-atomic';

export default function Example7() {
    return (
        <Input
            label="Label"
            placeholder="Focus and blur the input to show the error"
            error="Input with error"
        />
    )
}