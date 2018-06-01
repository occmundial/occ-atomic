/* Card with no padding */
import React from 'react';
import { Card, Title } from 'r12-common';

export default function Example2() {
    return (
        <Card noPadding>
            <Title h={3}>Card content</Title>
        </Card>
    )
}