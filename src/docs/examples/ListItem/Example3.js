/* Render a list with a list as children */
import React from 'react';
import { ListItem, Text } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
        <ul>
           <ListItem icon="check">
            <Text>Miembro 1</Text>
          </ListItem>
          <ListItem icon="cross" size="sm" hierarchy={1}>
                <Text micro>sub miembro jerarquía 1</Text>
          </ListItem>
          <ListItem icon="cross" size="sm" hierarchy={2}>
                <Text micro>sub miembro jerarquía 2</Text>
          </ListItem>
          <ListItem icon="cross" size="sm" hierarchy={3}>
                <Text micro>sub miembro jerarquía 3</Text>
          </ListItem>
        </ul>
    );
}