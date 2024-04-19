/* Colors */
import React from 'react';
import { Text } from '@occmundial/occ-atomic';
import ExampleTable from '../../ExampleTable';


export default function Example2() {
    return (
        <ExampleTable>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Prop (Legacy)</th>
                </tr>
            </thead>

            <tbody>
                {/* You can choose between top and bottom */}

                <tr>
                    <td><Text>CorpPrimary </Text></td>
                    <td><Text>High emphasis</Text></td>
                </tr>

                <tr>
                    <td><Text corpSecondary>CorpSecondary</Text></td>
                    <td><Text mid>Medium emphasis</Text></td>
                </tr>

                <tr>
                    <td><Text corpDisabled>CorpDisabled</Text></td>
                    <td><Text low>Low emphasis</Text></td>
                </tr>

                <tr>
                    <td><Text indigoPrimary>IndigoPrimary</Text></td>
                    <td><Text primary>Primary</Text></td>
                </tr>

                <tr>
                    <td><Text indigoSecondary>IndigoSecondary</Text></td>
                    <td><Text indigoSecondary>IndigoSecondary</Text></td>
                </tr>

                <tr>
                    <td><Text pinkPrimary>PinkPrimary</Text></td>
                    <td><Text secondary>Secondary</Text></td>
                </tr>

                <tr>
                    <td><Text success>Success</Text></td>
                    <td><Text success>Success</Text></td>
                </tr>

                <tr>
                    <td><Text warning>Warning</Text></td>
                    <td><Text warning>Warning</Text></td>
                </tr>

                <tr>
                    <td><Text error>Error</Text></td>
                    <td><Text error>Error</Text></td>
                </tr>

                <tr>
                    <td><Text info>Info</Text></td>
                    <td><Text info>Info</Text></td>
                </tr>

                <tr>
                    <td><Text disabled>Disabled</Text></td>
                    <td><Text disabled>Disabled</Text></td>
                </tr>

                <tr>
                    <td style={{ background: "black" }}><Text whitePrimary>WhitePrimary</Text></td>
                    <td style={{ background: "black" }}><Text white>White</Text></td>
                </tr>

                <tr>
                    <td style={{ background: "black" }}><Text whiteSecondary>WhiteSecondary</Text></td>
                    <td style={{ background: "black" }}><Text whiteSecondary>WhiteSecondary</Text></td>
                </tr>

                <tr>
                    <td> <Text link>Link</Text></td>
                    <td> <Text link>Link</Text></td>
                </tr>

            </tbody>
        </ExampleTable >

    );
}