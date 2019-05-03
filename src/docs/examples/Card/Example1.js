/* Elevations of card */
import React from 'react';
import { Card, Text, spacing } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
            <Card shadow={1} style={{ marginBottom: spacing.base }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.</Text>
            </Card>
            <Card shadow={2} style={{ marginBottom: spacing.base }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.</Text>
            </Card>
            <Card shadow={3} style={{ marginBottom: spacing.base }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.</Text>
            </Card>
            <Card shadow={4} style={{ marginBottom: spacing.base }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.</Text>
            </Card>
            <Card shadow={5} style={{ marginBottom: spacing.base }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.</Text>
            </Card>
        </div>

    );
}
