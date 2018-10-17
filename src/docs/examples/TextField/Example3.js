/* TextField with icon */
import React from 'react';
import { TextField } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <TextField
            label="Label"
            placeholder="Placeholder"
            assistiveText="Assistive text"
            iconName="search"
        />
    );
}