/* Different breakpoints */
import React from 'react';
import { Container, Row, Column, colors } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <Container fluid style={{background:colors.grey3}}>
            Container
            <Row style={{background:colors.grey4}}>
                Row
            </Row>
            <Row style={{background:colors.grey4}}>
                <Column xs={{col:12}} sm={{col:9}} md={{col:6}} lg={{col:4}} style={{background:colors.grey5}}>Column</Column>
            </Row>
        </Container>
    );
}