/* Elevations of card */
import React from 'react';
import { Card, Text, spacing } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Card rest style={{ marginBottom: spacing.base }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.</Text>
            </Card>
            <Card style={{ marginBottom: spacing.base }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.</Text>
            </Card>
            <Card raised style={{ marginBottom: spacing.base }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.</Text>
            </Card>
        </div>

    );
}
