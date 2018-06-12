/* Display a counter */
import React from 'react';
import { Input } from '@occmundial/occ-atomic';

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