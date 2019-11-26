/* Using the diferent styles in the listItem */
import React from 'react';
import { ListItem, Text, colors } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <ul>
          <Text>Bold/Italic Lines:</Text>
          <ListItem bold text="*bold text*" />
          <ListItem italic text="*italic text*" />
          <ListItem crossed text="*crossed text*" />
          <ListItem underlined text="*underlined text*" />
          <ListItem bold text="This listItem has some *bold text* and some regular text." />
          <ListItem italic text="This listItem has some *italic text* and some regular text." />
          <ListItem italic bold crossed text="*italic bold crossed text*" />
          <ListItem italic bold underlined text="This listItem has some *italic bold underlined text* and some regular text." />
          <Text>Mid, low, white Lines:</Text>
          <ListItem italic bold textColor="mid" text="Mid listItem." />
          <ListItem italic bold textColor="low" text="Low listItem." />
          <ListItem style={{background:colors.prim}} icon="cross" iconColor={colors.bgWhite} italic bold textColor="white" text="White listItem." />
          <Text>Link Lines:</Text>
          <ListItem href="https://www.google.com/" target="_blank"  linkStyle={{textDecoration: 'none', color: colors.textLink}} text="ListItem with a #link# to google." />
          <ListItem italic bold href="https://www.google.com/" text="ListItem with a #link# to see the List Component and some *italic bold* text" />
        </ul>
    );
}