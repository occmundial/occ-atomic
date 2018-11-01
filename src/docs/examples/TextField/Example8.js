/* TextField disabled */
import React from 'react';
import { TextField } from '@occmundial/occ-atomic';

export default function Example8() {
    return (
        <TextField
            label="Label"
            placeholder="Placeholder"
            assistiveText="Assistive text"
            disabled
        />
    );
}