/* Columns */
import React from 'react';
import { Container, Row, Column, colors } from 'r12-common';

export default function Example1() {
    return (
        <Container fluid style={{background:colors.grey3}}>
            Container
            <Row style={{background:colors.grey4}}>
                Row
            </Row>
            <Row style={{background:colors.grey4}}>
                <Column xs={{col:6}} style={{background:colors.grey5}}>Column</Column>
            </Row>
        </Container>
    )
}