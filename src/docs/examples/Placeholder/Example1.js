/* Placeholder matching the text sizes */
import React from 'react';
import { Placeholder } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Placeholder textSize="hero" />
            <Placeholder textSize="headline" />
            <Placeholder textSize="heading" />
            <Placeholder textSize="subheading" />
            <Placeholder textSize="large" />
            <Placeholder textSize="standard" />
            <Placeholder textSize="small" />
            <Placeholder textSize="micro" />
        </div>
    );
}
