/* Push, pull & offset */
import React from 'react';
import { Container, Row, Column, colors } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <Container fluid style={{background:colors.grey3}}>
            Container
            <Row style={{background:colors.grey4}}>
                Row
            </Row>
            <Row style={{background:colors.grey4}}>
                <Column xs={{col:3, offset:1}} style={{background:colors.grey5}}>Offset</Column>
                <Column xs={{col:3, pull:1}} style={{background:colors.grey5}}>Pull</Column>
                <Column xs={{col:3, push:1}} style={{background:colors.grey5}}>Push</Column>
            </Row>
        </Container>
    )
}