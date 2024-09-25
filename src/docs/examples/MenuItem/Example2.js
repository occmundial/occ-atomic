/** Dense prop */
import React from 'react';
import { MenuItem } from '@occmundial/occ-atomic';

export default function Example2() {
  return (
    <React.Fragment>
      {[...Array(3).keys()].map(val => (
        <MenuItem
          key={val}
          dense
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
