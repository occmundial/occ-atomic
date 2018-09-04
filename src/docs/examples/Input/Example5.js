/* Select value on focus */
import React from 'react';
import { Input } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <Input
            label="Label"
            placeholder="Placeholder"
            valueProp="Click on the Input to select this text"
            selectOnFocus
        />
    );
}