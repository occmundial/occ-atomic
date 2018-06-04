/* Row */
import React from 'react';
import { Container, Row, colors } from 'r12-common';

export default function Example1() {
    return (
        <Container fluid style={{background:colors.grey3}}>
            Container
            <Row style={{background:colors.grey4}}>
                Row
            </Row>
        </Container>
    )
}