/* SlideDown with onToggle */
import React from 'react';
import { SlideDown, Checkbox } from '@occmundial/occ-atomic';

export default function Example1() {
    const onToggle = (value) => {
        if (value) console.log('Expanded');
        else console.log('Collapsed');
    };
    return (
        <SlideDown title="SlideDown" onToggle={onToggle}>
            <Checkbox label="Content of the SlideDown" />
        </SlideDown>
    );
}
