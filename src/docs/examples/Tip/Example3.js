/* Tip small size */
import React from 'react';
import { Tip } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <Tip
            icon
            theme="info"
            size="small"
            onClose={() => true}
            cta={{
                text: 'Click here.',
                onClick: () => alert('CTA clicked!')
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat
        </Tip>
    );
}
