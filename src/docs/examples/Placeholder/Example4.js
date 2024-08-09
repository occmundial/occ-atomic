/* Example of layout loading */
import React from 'react';
import { Placeholder, Flexbox, Grid, spacing } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <Grid fluid>
            <Grid.Row>
                <Grid.Col xxs={{ col: 10 }}>
                    <Flexbox display="flex" alignItems="start">
                        <Placeholder width={spacing.xLarge} height={spacing.xLarge} round />
                        <Flexbox flex="1" style={{ marginLeft: spacing.small }}>
                            <Placeholder textSize="heading" />
                            <Placeholder textSize="small" bottom="base" width={120} />
                            <Placeholder textSize="standard" width="85%" />
                            <Placeholder textSize="standard" width="72%" />
                            <Placeholder textSize="standard" width="32%" />
                        </Flexbox>
                    </Flexbox>
                </Grid.Col>
                <Grid.Col xxs={{ col: 2 }}>
                    <Placeholder textSize="small" />
                    <Placeholder textSize="small" with="85%" />
                </Grid.Col>
            </Grid.Row>
        </Grid>
    );
}
