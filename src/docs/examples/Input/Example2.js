/* Clear Input */
import React from 'react';
import { Input } from 'r12-common';

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