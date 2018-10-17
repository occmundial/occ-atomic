/* Display a counter */
import React from 'react';
import { TextField } from '@occmundial/occ-atomic';

export default function Example6() {
    return (
        <TextField
            label="Label"
            placeholder="Placeholder"
            assistiveText="Assistive text"
            maxLength={30}
            counter
        />
    );
}