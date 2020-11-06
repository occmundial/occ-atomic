/* Tip with other properties */
import React from 'react';
import { Tip } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <Tip
            theme="info"
            icon
            center
            noBorderRadius
            onClose={() => alert('Closing tip')}
        >
            This tip is using some of the other props available.
        </Tip>
    );
}
