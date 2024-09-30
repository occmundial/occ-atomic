/* NavTab with center */
import React from 'react';
import { NavTab } from '@occmundial/occ-atomic';

function Example3() {
  const left = [
    {
      key: 1,
      type: 'navButton',
      iconName: 'bars'
    }
  ];
  const right = [
    {
      key: 1,
      type: 'navButton',
      iconName: 'messages'
    }
  ];
  const center = [
    {
      key: 1,
      type: 'navButton',
      iconName: 'panel'
    },
    {
      key: 2,
      type: 'navButton',
      iconName: 'search'
    },
    {
      key: 3,
      type: 'navButton',
      iconName: 'user'
    }
  ];
  return (
    <div>
      <NavTab blue left={left} center={center} right={right} />
      <NavTab left={left} center={center} right={right} />
    </div>
  );

}

export default Example3;
