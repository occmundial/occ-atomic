/* TextField with error */
import React from 'react';
import { TextField } from '@occmundial/occ-atomic';

export default function Example7() {
    return (
        <TextField
            label="Label"
            placeholder="Placeholder"
            assistiveText="Assistive text"
            error
            allowError
        />
    );
}