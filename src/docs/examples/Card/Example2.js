/* Card with no padding */
import React from 'react';
import { Card, Title } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <Card noPadding>
            <Title h={3}>Card content</Title>
        </Card>
    );
}