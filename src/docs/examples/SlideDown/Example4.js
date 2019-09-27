/* SlideDown with Text props */
import React from 'react';
import { SlideDown, Checkbox } from '@occmundial/occ-atomic';

export default function Example1() {
    const onToggle = (value) => {
        if (value) console.log('Expanded');
        else console.log('Collapsed');
    };
    const textProps = {
        heading: true,
        success: true,
        large: true,
        strong: true,
        tag: 'label',
    };
    return (
        <SlideDown title="SlideDown" textProps={textProps} onToggle={onToggle}>
            <Checkbox label="Content of the SlideDown" />
        </SlideDown>
    );
}
