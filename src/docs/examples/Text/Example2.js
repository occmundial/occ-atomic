/* Colors */
import React from 'react';
import { Text, colors } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div>
            <Text>High emphasis</Text>
            <Text mid>Medium emphasis</Text>
            <Text low>Low emphasis</Text>
            <Text primary>Primary</Text>
            <Text secondary>Secondary</Text>
            <Text success>Success</Text>
            <Text error>Error</Text>
            <Text warning>Warning</Text>
            <Text info>Info</Text>
            <Text disabled>Disabled</Text>
            <div style={{background:colors.prim}}><Text white>White</Text></div>
        </div>
    );
}