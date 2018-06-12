/* Icon with custom colors */
import React from 'react';
import { Icon, colors } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <Icon iconName="search" colors={[colors.blue]} hover={[colors.red]} />
    )
}