/* Simple SlideDown */
import React from 'react';
import { SlideDown, Checkbox } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <SlideDown title="SlideDown">
            <Checkbox label="Content of the SlideDown" />
        </SlideDown>
    );
}
