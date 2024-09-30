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
      type: 'button',
      icon: 'messages'
    }
  ];
  const center = [
    {
      key: 1,
      type: 'button',
      icon: 'panel'
    },
    {
      key: 2,
      type: 'button',
      icon: 'search'
    },
    {
      key: 3,
      type: 'button',
      icon: 'user'
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
