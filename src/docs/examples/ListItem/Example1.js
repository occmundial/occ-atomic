/* Render a simple List */
import React from 'react';
import { ListItem, Text, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <ul>
          <ListItem icon="check" iconColor={colors.prim} size="headline" text="Miembro 1" />
          <ListItem icon="check" iconColor={colors.prim} size="heading" text="Miembro 2" />
          <ListItem icon="check" iconColor={colors.prim} size="subheading" text="Miembro 3" />
          <ListItem icon="cross" iconColor={colors.error} size="large" text="Miembro 4" />
          <ListItem icon="check" text="Miembro 5" />
          <ListItem icon="cross" iconColor={colors.secDark} size="small" text="Miembro 6" />
          <ListItem icon="cross" size="micro" text="Miembro 7" />
          <Text>Multiple Lines:</Text>
          <ListItem icon="cross" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris justo, feugiat a erat vel, finibus accumsan lorem. Vestibulum ut commodo elit, eget viverra purus. Fusce feugiat libero ac felis vulputate egestas. Mauris non malesuada lacus. Fusce vitae tellus vel magna iaculis vehicula ac vitae mi. Vivamus tincidunt accumsan diam at semper. Fusce in orci eu sem fermentum fermentum sed at odio." />
          <ListItem size="small" icon="cross" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris justo, feugiat a erat vel, finibus accumsan lorem. Vestibulum ut commodo elit, eget viverra purus. Fusce feugiat libero ac felis vulputate egestas. Mauris non malesuada lacus. Fusce vitae tellus vel magna iaculis vehicula ac vitae mi. Vivamus tincidunt accumsan diam at semper. Fusce in orci eu sem fermentum fermentum sed at odio." />
        </ul>
    );
}