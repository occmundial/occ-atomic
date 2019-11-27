/* Using the diferent styles in the listItem */
import React from 'react';
import { ListItem, Text, colors } from '@occmundial/occ-atomic';

export default function Example3() {
    return (
        <ul>
          <Text>Bold/Italic Lines:</Text>
          <ListItem child={[{text: "bold text", props:{bold: true}}]} />
          <ListItem child={[{text: "italic text", props:{italic: true}}]} />
          <ListItem child={[{text: "crossed text", props:{crossed: true}}]} crossed text="*crossed text*" />
          <ListItem child={[{text: "underlined text", props:{underlined: true}}]} />
          <ListItem child={[{text: "bold text ", props:{bold: true}}, {text: "italic text", props:{italic: true}}]} />
          <ListItem child={[{text: "bold underlined text ", props:{bold: true, underlined: true}}, {text: "italic crossed text", props:{italic: true, crossed: true }}]} />
          <ListItem child={[{text: "This text has a " }, {text: "link", link:{href: "https://google.com", target: '_blank', linkStyle: {color: colors.textLink, textDecoration: 'none'}}},{text: " <- right there" },]} />
        </ul>
    );
}