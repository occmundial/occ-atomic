/* Tip with bold text */
import React from 'react';
import { Tip } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <Tip theme="info">
            This tip has some *bold text* and some regular text.
        </Tip>
    );
}
