/* Clear Input */
import React from 'react';
import { Input } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <Input
            label="Label"
            placeholder="Placeholder"
            valueProp="Click on the 'x' icon"
            clear
        />
    )
}