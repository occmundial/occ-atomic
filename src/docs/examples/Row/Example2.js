/* Nested grid */
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
                <Column xs={{col:9}} style={{background:colors.grey5}}>
                    Column
                    <Row style={{background:colors.grey4}}>
                        Row
                    </Row>
                    <Row style={{background:colors.grey4}}>
                        <Column xs={{col:7}} style={{background:colors.grey5}}>
                            Column
                        </Column>
                    </Row>
                </Column>
            </Row>
        </Container>
    );
}