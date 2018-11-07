/* Select value on focus and clear TextField */
import React from 'react';
import { TextField } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <TextField
            label="Label"
            placeholder="Placeholder"
            assistiveText="Assistive text"
            valueProp="Click on the TextField to select this text"
            selectOnFocus
            clear
        />
    );
}