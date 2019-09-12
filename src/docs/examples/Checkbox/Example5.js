/* Indeterminated checkbox */
import React from 'react';
import { Checkbox } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <div style={{display:'inline-block'}}>
            <Checkbox label="Indeterminated" indeterminated />
        </div>
    );
}
