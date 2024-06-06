/* Themes of Tip */
import React from 'react';
import { Banner, Flexbox } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <Flexbox display="flex" direction="col" style={{ gap: 8 }}>
            <Banner
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="info"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
            <Banner
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="warning"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
            <Banner
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="success"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
            <Banner
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="error"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
            <Banner
                onClose={() => {}}
                cta={{
                    text: 'Lorem ipsum.',
                    onClick: () => alert('CTA clicked!')
                }}
                theme="promote"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Banner>
        </Flexbox>
    );
}
