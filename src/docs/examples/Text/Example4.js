/* Spacing */
import React from 'react';
import { Text } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                {/* You can choose between top and bottom */}
                <Text bottom0>Bottom0</Text>
                <Text bottom1>Bottom1</Text>
                <Text bottom2>Bottom2</Text>
                <Text bottom3>Bottom3</Text>
                <Text bottom4>Bottom4</Text>
                <Text bottom5>Bottom5</Text>
                <Text bottom6>Bottom6</Text>
                <Text bottom7>Bottom7</Text>
                <Text bottom8>Bottom8</Text>
                <Text bottom9>Bottom9</Text>
                <Text bottom10>Bottom10</Text>
                <Text bottom11>Bottom11</Text>
                <Text bottom12>Bottom12</Text>
            </div>
            <div style={{ flex: 1 }}>
                <Text bottomXTiny>X-Tiny</Text>
                <Text bottomTiny>Tiny</Text>
                <Text bottomSmall>Small</Text>
                <Text bottomBase>Base</Text>
                <Text bottomMedium>Medium</Text>
                <Text bottomLarge>Large</Text>
                <Text bottomXLarge>XLarge</Text>
            </div>
        </div>
    );
}
