/* Render a simple List */
import React from 'react';
import { List, colors } from '@occmundial/occ-atomic';

export default function Example1() {
    const dummyList = [
      {text: 'Bullet1'},
      {text: 'Bullet2', size: 'small'},
      {text: 'Bullet3', textColor: 'mid' },
      {text: 'Bullet4', iconName: 'cross', iconColor: colors.prim, subItems:[{text: 'Bullet 4.1', subItems: [{text: 'Bullet 4.1.1'}]}]},
      {text: 'This text is °/italic/° <-'},
      {text: 'This text is °*bold*° <-'},
      {text: 'This text is °_underlined_° <-'},
      {text: 'This text is °-crossed-° <-'},
      {text: 'This text is °*-crossed bold-*° <-'},
      {text: 'This text is °*-crossed bold-*°  and °/_italic underlined_/°<-'},
      {text: 'This text has a  °#link#° <-', link:{href: 'https://google.com', target:'_blank', linkStyle: {textDecoration: 'none', color: colors.textLink }}},
      {text: 'This text has a  °#link#° <- and °*bold text*° <-', link:{href: 'https://google.com'}},
    ];
    return (
      <List list={dummyList} />
    );
}