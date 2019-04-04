/* Card with a shadow of level 5 */
import React from 'react';
import { Card, Title } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <Card shadow={5}>
            <Title h={3}>Card content</Title>
        </Card>
    );
}
