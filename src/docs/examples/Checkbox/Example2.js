/* Disabled checkbox */
import React from 'react';
import { Checkbox } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div style={{display:'inline-block'}}>
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Disabled" disabled undetermined />
            <Checkbox label="Disabled" disabled value={true} />
        </div>
    );
}
