/*SlideDown with icon */
import React from 'react';
import { SlideDown, Text } from '@occmundial/occ-atomic';

export default function Example6() {
    return (
        <SlideDown title="SlideDown" icon="globe" theme="blue" tag="Etiqueta" divider>
            <Text>Slidedown content.</Text>
        </SlideDown>
    );
}