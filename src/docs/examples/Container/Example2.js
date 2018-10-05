/* Container with onClick */
import React from 'react';
import { Container, colors } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <Container style={{background:colors.grey3}} onClick={() => {console.log('Clicked!');}}>Container</Container>
    );
}