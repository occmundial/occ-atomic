/* Tip with call to action */
import React from 'react';
import { Tip } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <Tip
            theme="info"
            cta={{
                text: 'Click here.',
                onClick: () => alert('CTA clicked!')
            }}
            onClose={() => alert('Closing tip')}
        >
            This tip has a call to action.
        </Tip>
    );
}
