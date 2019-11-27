/* Render a list with a list as children */
import React from 'react';
import { ListItem } from '@occmundial/occ-atomic';

export default function Example2() {
    return (
      <ul>
            <ListItem icon="cross" child={[{text: "Miembro 1"}]} />
            <ListItem size="small" hierarchy={1} child={[{text: "sub miembro jerarquía 1"}]}/>
            <ListItem size="small" hierarchy={2} child={[{text: "sub miembro jerarquía 2"}]} />
            <ListItem size="small" hierarchy={3} child={[{text: "sub miembro jerarquía 3"}]}/>
      </ul>
    );
}