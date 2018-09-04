/* Valid Input */
import React from 'react';
import { Input } from '@occmundial/occ-atomic';

export default function Example8() {
    return (
        <Input
            label="Label"
            placeholder="Placeholder"
            valueProp="Focus and blur the input to show the valid status"
            valid
        />
    );
}