/* SlideDown with Text props */
import React from 'react';
import { SlideDown, Checkbox } from '@occmundial/occ-atomic';

export default function Example4() {
    const onToggle = (value) => {
        if (value) console.log('Expanded');
        else console.log('Collapsed');
    };

    return (
        <SlideDown title="SlideDown" textSize="lg" onToggle={onToggle}>
            <Checkbox label="Content of the SlideDown" />
        </SlideDown>
    );
}
