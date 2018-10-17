/* TextField for password */
import React from 'react';
import { TextField } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <TextField
            label="Label"
            placeholder="Placeholder"
            assistiveText="Assistive text"
            type="password"
        />
    );
}