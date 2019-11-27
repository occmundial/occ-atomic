/* Render a simple List */
import React from 'react';
import { ListItem, Text, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <ul>
          <ListItem icon="check" iconColor={colors.prim} size="headline" child={[{text: "Miembro 1"}]} />
          <ListItem icon="check" iconColor={colors.prim} size="heading" child={[{text: "Miembro 2"}]} />
          <ListItem icon="check" iconColor={colors.prim} size="subheading" child={[{text: "Miembro 3"}]} />
          <ListItem icon="cross" iconColor={colors.error} size="large" child={[{text: "Miembro 4"}]} />
          <ListItem icon="check" child={[{text: "Miembro 5"}]} />
          <ListItem icon="cross" iconColor={colors.secDark} size="small" child={[{text: "Miembro 6"}]} />
          <ListItem icon="cross" size="micro" child={[{text: "Miembro 7"}]} />
          <Text>Multiple Lines:</Text>
          <ListItem icon="cross" child={[{text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris justo, feugiat a erat vel, finibus accumsan lorem. Vestibulum ut commodo elit, eget viverra purus. Fusce feugiat libero ac felis vulputate egestas. Mauris non malesuada lacus. Fusce vitae tellus vel magna iaculis vehicula ac vitae mi. Vivamus tincidunt accumsan diam at semper. Fusce in orci eu sem fermentum fermentum sed at odio."}]} />
          <ListItem size="small" icon="cross" child={[{text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris justo, feugiat a erat vel, finibus accumsan lorem. Vestibulum ut commodo elit, eget viverra purus. Fusce feugiat libero ac felis vulputate egestas. Mauris non malesuada lacus. Fusce vitae tellus vel magna iaculis vehicula ac vitae mi. Vivamus tincidunt accumsan diam at semper. Fusce in orci eu sem fermentum fermentum sed at odio."}]} />
        </ul>
    );
}