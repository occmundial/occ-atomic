/* Disabled checkbox */
import React from 'react';
import { Check } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <div style={{display:'inline-block'}}>
            <Check label="Disabled" disabled />
        </div>
    );
}