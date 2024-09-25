/** Component prop */
import React from 'react';
import { MenuItem } from '@occmundial/occ-atomic';

export default class Example1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        { [...Array(3).keys()].map(val => (
            <MenuItem 
              key={val}
              component="a"
              href="#MenuItem"
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
}
