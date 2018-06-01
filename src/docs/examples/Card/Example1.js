/* Card with a shadow of level 6 */
import React from 'react';
import { Card, Title } from 'r12-common';

export default function Example1() {
    return (
        <Card shadow={6}>
            <Title h={3}>Card content</Title>
        </Card>
    )
}