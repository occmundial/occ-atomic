/* Disabled SlideToggle */
import React from 'react';
import { SlideToggle } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div style={{display:'inline-block'}}>
            <SlideToggle label="Switch On Disabled" value disabled />
            <SlideToggle label="Switch Off Disabled" disabled />

        </div>
    );
}
