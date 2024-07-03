/* Tip with call to action */
import React from 'react';
import { Tip, Flexbox } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <Flexbox display="flex" direction="col" style={{ gap: 8 }}>
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
            <Tip
                theme="warning"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
                onClose={() => alert('Closing tip')}
            >
                This tip has a call to action.
            </Tip>
            <Tip
                theme="success"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
                onClose={() => alert('Closing tip')}
            >
                This tip has a call to action.
            </Tip>
            <Tip
                theme="error"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
                onClose={() => alert('Closing tip')}
            >
                This tip has a call to action.
            </Tip>
            <Tip
                theme="promote"
                cta={{
                    text: 'Click here.',
                    onClick: () => alert('CTA clicked!')
                }}
                onClose={() => alert('Closing tip')}
            >
                This tip has a call to action.
            </Tip>
        </Flexbox>
    );
}
