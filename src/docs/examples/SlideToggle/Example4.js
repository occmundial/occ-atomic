/* SlideToggle with custom name */
import React from 'react';
import { SlideToggle } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <div style={{display:'inline-block'}}>
            <SlideToggle label="Custom name" value name="slide_name" />
        </div>
    );
}
