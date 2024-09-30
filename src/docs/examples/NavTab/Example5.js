/* NavTab with menu button */
import React from 'react';
import { NavTab, Icon, colors } from '@occmundial/occ-atomic';

function Example5() {
  const left = [
    {
      key: 1,
      type: 'logo',
      logo: (
        <a href="#NavTab">
          <Icon iconName="occLogoWhite" colors={[colors.bgWhite]} />
        </a>
      )
    }
  ];
  const left2 = [
    {
      key: 1,
      type: 'logo',
      logo: (
        <a href="#NavTab">
          <Icon iconName="occLogoBlue" colors={[colors.grey700]} />
        </a>
      )
    }
  ];
  const right = [
    {
      key: 0,
      type: 'navButton',
      iconName: 'bars'
    }
  ];
  return (
    <div>
      <NavTab blue left={left} right={right} />
      <NavTab left={left2} right={right} />
    </div>
  );
}

export default Example5;
