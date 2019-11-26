/* Using the diferent styles in the listItem */
import React from 'react';
import { ListItem, Text, colors } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <ul>
          <Text>Bold/Italic Lines:</Text>
          <ListItem icon="cross" bold text="*bold text*" />
          <ListItem icon="cross" italic text="*italic text*" />
          <ListItem icon="cross" crossed text="*crossed text*" />
          <ListItem icon="cross" underlined text="*underlined text*" />
          <ListItem icon="cross" bold text="This listItem has some *bold text* and some regular text." />
          <ListItem icon="cross" italic text="This listItem has some *italic text* and some regular text." />
          <ListItem icon="cross" italic bold text="*italic bold text*" />
          <ListItem icon="cross" italic bold text="This listItem has some *italic bold text* and some regular text." />
          <Text>Mid, low, white Lines:</Text>
          <ListItem icon="cross" italic bold textColor="mid" text="Mid listItem." />
          <ListItem icon="cross" italic bold textColor="low" text="Low listItem." />
          <ListItem style={{background:colors.prim}} icon="cross" iconColor={colors.bgWhite} italic bold textColor="white" text="White listItem." />
          <Text>Link Lines:</Text>
          <ListItem icon="cross" href="https://www.google.com/" target="_blank"  linkStyle={{textDecoration: 'none', color: colors.textLink}} text="ListItem with a #link# to google." />
          <ListItem icon="cross" italic bold href="https://www.google.com/" text="ListItem with a #link# to see the List Component and some *italic bold* text" />
        </ul>
    );
}