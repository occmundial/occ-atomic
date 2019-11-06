/* Render a simple List */
import React from 'react';
import { ListItem, Text, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <ul>
          <ListItem icon="check" iconColor={colors.prim} size="xl">
            <Text hero>Miembro 1</Text>
          </ListItem>
          <ListItem icon="check" iconColor={colors.prim} size="lg">
            <Text headline>Miembro 2</Text>
          </ListItem>
          <ListItem icon="check" iconColor={colors.prim} size="md">
            <Text heading>Miembro 3</Text>
          </ListItem>
          <ListItem icon="cross" iconColor={colors.error} size="bs">
            <Text subheading>Miembro 4</Text>
          </ListItem>
          <ListItem icon="check">
            <Text>Miembro 5</Text>
          </ListItem>
          <ListItem icon="cross" iconColor={colors.secDark} size="sm">
            <Text small>Miembro 6</Text>
          </ListItem>
          <ListItem icon="cross" size="sm">
            <Text micro>Miembro 7</Text>
          </ListItem>
          <Text>Multiple Lines:</Text>
          <ListItem icon="cross">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris justo, feugiat a erat vel, finibus accumsan lorem. Vestibulum ut commodo elit, eget viverra purus. Fusce feugiat libero ac felis vulputate egestas. Mauris non malesuada lacus. Fusce vitae tellus vel magna iaculis vehicula ac vitae mi. Vivamus tincidunt accumsan diam at semper. Fusce in orci eu sem fermentum fermentum sed at odio.</Text>
          </ListItem>
          <ListItem size="sm" icon="cross">
            <Text small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris justo, feugiat a erat vel, finibus accumsan lorem. Vestibulum ut commodo elit, eget viverra purus. Fusce feugiat libero ac felis vulputate egestas. Mauris non malesuada lacus. Fusce vitae tellus vel magna iaculis vehicula ac vitae mi. Vivamus tincidunt accumsan diam at semper. Fusce in orci eu sem fermentum fermentum sed at odio.</Text>
          </ListItem>
        </ul>
    );
}