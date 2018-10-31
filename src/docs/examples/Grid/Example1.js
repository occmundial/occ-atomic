/* Grid fluid */
import React from 'react';
import { Grid, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <Grid fluid style={{background:colors.grey3}}>
            <Grid.Row>
                <Grid.Col xxs={{col:12}} xs={{col:6}} sm={{col:4}} md={{col:3}} lg={{col:2}} xl={{col:1}}>|</Grid.Col>
                <Grid.Col xxs={{col:12}} xs={{col:6}} sm={{col:4}} md={{col:3}} lg={{col:2}} xl={{col:1}}>|</Grid.Col>
                <Grid.Col xxs={{col:12}} xs={{col:6}} sm={{col:4}} md={{col:3}} lg={{col:2}} xl={{col:1}}>|</Grid.Col>
                <Grid.Col xxs={{col:12}} xs={{col:6}} sm={{col:4}} md={{col:3}} lg={{col:2}} xl={{col:1}}>|</Grid.Col>
            </Grid.Row>
        </Grid>
    );
}