/* RangeCounter */
import React from 'react';
import { RangeCounter } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <RangeCounter min={20} max={40} total={100} type="elements" />
    )
}