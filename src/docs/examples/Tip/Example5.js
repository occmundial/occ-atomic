/* Tip with banner prop */
import React from 'react';
import { Tip, Flexbox } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <Flexbox display="flex" direction="col" style={{ gap: 8 }}>
            <Tip
                icon
                banner
                onClose={() => alert('Closing tip')}
                theme="info"
            >
                Tip with some simple text.
            </Tip>
            <Tip
                icon
                banner
                onClose={() => alert('Closing tip')}
                theme="warning"
            >
                Tip with some simple text.
            </Tip>
            <Tip
                icon
                banner
                onClose={() => alert('Closing tip')}
                theme="success"
            >
                Tip with some simple text.
            </Tip>
            <Tip
                icon
                banner
                onClose={() => alert('Closing tip')}
                theme="error"
            >
                Tip with some simple text.
            </Tip>
            <Tip
                icon
                banner
                onClose={() => alert('Closing tip')}
                theme="promote"
            >
                Tip with some simple text.
            </Tip>
        </Flexbox>
    );
}
