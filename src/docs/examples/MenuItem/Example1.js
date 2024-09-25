/** Menu Item */
import React from 'react';
import { MenuItem } from '@occmundial/occ-atomic';

export default function Example1() {
  return (
    <React.Fragment>
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
    </ React.Fragment>
  );
}
