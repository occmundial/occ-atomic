/* Tip with banner prop */
import React from 'react';
import { Tip, Flexbox } from '@occmundial/occ-atomic';

export default function Example5() {
    return (
        <Flexbox display="flex" direction="col" style={{ gap: 8 }}>
            <Tip
                icon
                banner
                theme="info"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
            >
                Tip with some simple text.
            </Tip>
            <Tip
                icon
                banner
                theme="warning"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
            >
                Tip with some simple text.
            </Tip>
            <Tip
                icon
                banner
                theme="success"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
            >
                Tip with some simple text.
            </Tip>
            <Tip
                icon
                banner
                theme="error"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
            >
                Tip with some simple text.
            </Tip>
            <Tip
                icon
                banner
                theme="promote"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
            >
                Tip with some simple text.
            </Tip>
        </Flexbox>
    );
}
