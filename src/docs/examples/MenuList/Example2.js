/** Menu List (dense) with MenuItem */
import React from 'react';
import { MenuItem, MenuList } from '@occmundial/occ-atomic';

export default function Example2() {
  return (
    <MenuList dense>
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
