/* Spacing */
import React from 'react';
import { Text } from '@occmundial/occ-atomic';
import ExampleTable from '../../ExampleTable';

export default function Example4() {
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
                    <td><Text bottom0>Bottom0</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text bottom1>Bottom1</Text></td>
                    <td><Text bottomXTiny>X-Tiny</Text></td>
                </tr>

                <tr>
                    <td><Text bottom2>Bottom2</Text></td>
                    <td><Text bottomTiny>Tiny</Text></td>
                </tr>

                <tr>
                    <td><Text bottom3>Bottom3</Text></td>
                    <td/>
                </tr>


                <tr>
                    <td><Text bottom4>Bottom4</Text></td>
                    <td><Text bottomSmall>Small</Text></td>
                </tr>

                <tr>
                    <td><Text bottom5>Bottom5</Text></td>
                    <td><Text bottomBase>Base</Text></td>
                </tr>

                <tr>
                    <td><Text bottom6>Bottom6</Text></td>
                    <td><Text bottomMedium>Medium</Text></td>
                </tr>

                <tr>
                    <td><Text bottom7>Bottom7</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text bottom8>Bottom8</Text></td>
                    <td><Text bottomLarge>Large</Text></td>
                </tr>

                <tr>
                    <td><Text bottom9>Bottom9</Text></td>
                    <td><Text bottomXLarge>XLarge</Text></td>
                </tr>

                <tr>
                    <td><Text bottom10>Bottom10</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text bottom11>Bottom11</Text></td>
                    <td/>
                </tr>

                <tr>
                    <td><Text bottom12>Bottom12</Text></td>
                    <td/>
                </tr>

            </tbody>

        </ExampleTable>
    );
}
