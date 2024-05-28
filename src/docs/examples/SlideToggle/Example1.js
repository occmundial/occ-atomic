/* Active SlideToggle */
import React from 'react';
import { SlideToggle }  from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div style={{display:'inline-block'}}>
            <SlideToggle label="Switch On" value />
            <SlideToggle label="Switch Off" />
        </div>
    );
}
