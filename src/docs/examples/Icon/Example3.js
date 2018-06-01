/* Icon with custom colors */
import React from 'react';
import { Icon, colors } from 'r12-common';

export default function Example3() {
    return (
        <Icon iconName="search" colors={[colors.blue]} hover={[colors.red]} />
    )
}