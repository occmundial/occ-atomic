/** Menu List with MenuItem */
import React from 'react';
import { MenuItem, MenuList } from '@occmundial/occ-atomic';

export default function Example1() {
  return (
    <MenuList>
      {[...Array(3).keys()].map(val => (
        <MenuItem
          key={val}
          iconRightProps={{
            iconName: 'chevron-right'
          }}
          iconLeftProps={{
            iconName: 'globe'
          }}
        >
          Placeholder
        </MenuItem>
      ))}
    </MenuList>
  );
}
