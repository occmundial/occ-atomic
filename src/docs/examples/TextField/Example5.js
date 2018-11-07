/* Validation with regex */
import React from 'react';
import { TextField } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <TextField
            label="Label"
            placeholder="Numbers"
            assistiveText="Assistive text"
            regex="^[0-9]*$"
        />
    );
}