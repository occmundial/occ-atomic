/* SlideDown with Tag */
import React from 'react';
import { SlideDown, Checkbox } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <SlideDown title="SlideDown" tag="New">
            <Checkbox label="Content of the SlideDown" />
        </SlideDown>
    );
}
