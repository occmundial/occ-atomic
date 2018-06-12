/* Display a counter */
import React from 'react';
import { Input } from 'r12-common';

export default function Example6() {
    return (
        <Input
            label="Label"
            placeholder="Placeholder"
            maxLength={50}
            counter
        />
    )
}