/*SlideDown with blue theme */
import React from 'react';
import { SlideDown, Text } from '@occmundial/occ-atomic';

export default function Example6() {
    return (
        <SlideDown title="SlideDown" theme="blue">
            <Text>Slidedown content.</Text>
        </SlideDown>
    );
}