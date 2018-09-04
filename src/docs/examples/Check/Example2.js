/* Checkbox with label and text on the right */
import React from 'react';
import { Check } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div style={{display:'inline-block', width:300}}>
            <Check label="Label" right="Right text" />
        </div>
    );
}