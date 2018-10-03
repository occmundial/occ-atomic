/* Hide content in small window size with CSS */
import React from 'react';
import { Hidden } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <Hidden sm mediaQuery>Content</Hidden>
    );
}