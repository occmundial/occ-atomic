/* Render a simple List */
import React from 'react';
import { ListItem, Text, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    return (
        <div>
          <ListItem icon="check" iconColor={colors.prim} size="xxl">
            <Text hero>Miembro 1</Text>
          </ListItem>
          <ListItem icon="check" iconColor={colors.prim} size="xl">
            <Text headline>Miembro 2</Text>
          </ListItem>
          <ListItem icon="check" iconColor={colors.prim} size="lg">
            <Text heading>Miembro 3</Text>
          </ListItem>
          <ListItem icon="cross" iconColor={colors.error} size="md">
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
        </div>
    );
}