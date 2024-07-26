/* Sizes */
import React from 'react';
import { Button } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'baseline' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    );
}