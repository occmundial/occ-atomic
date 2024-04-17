/* Colors */
import React from 'react';
import { Text, colors } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <Text>CorpPrimary </Text>
                <Text corpSecondary>CorpSecondary</Text>
                <Text corpDisabled>CorpDisabled</Text>
                <Text indigoPrimary>indigoPrimary</Text>
                <Text indigoSecondary>indigoSecondary</Text>
                <Text pinkPrimary>PinkPrimary</Text>
                <Text success>Success</Text>
                <Text warning>Warning</Text>
                <Text error>Error</Text>
                <Text info>Info</Text>
                <Text disabled>Disabled</Text>
                <Text link>Link</Text>
                <div style={{ background: "black" }}>
                    <Text whitePrimary>WhitePrimary</Text>
                </div>
                <div style={{ background: "black" }}>
                    <Text whiteSecondary>WhiteSecondary</Text>
                </div>
            </div>

            <div style={{ flex: 1 }}>
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
                <div style={{ background: colors.prim }}><Text white>White</Text></div>
            </div>
        </div>
    );
}