/* NavTab with icons */
import React, { useState } from 'react';
import { NavTab } from '@occmundial/occ-atomic';

function Example5() {
  const [selected, setSelected] = useState(false);
  const flexCenter = [
    {
      key: 1,
      type: 'navButton',
      iconName: 'panel',
      label: 'Dashboard',
      selected: selected === 'dashboard',
      onClick: () => setSelected('dashboard'),
      direction: 'col',
      width: 96
    },
    {
      key: 2,
      type: 'navButton',
      iconName: 'search',
      label: 'Search',
      selected: selected === 'search',
      onClick: () => setSelected('search'),
      direction: 'col',
      width: 96
    },
    {
      key: 3,
      type: 'navButton',
      iconName: 'user',
      label: 'Profile',
      selected: selected === 'profile',
      onClick: () => setSelected('profile'),
      direction: 'col',
      width: 96
    }
  ];

  return (
    <div>
      <NavTab blue flexCenter={flexCenter} />
      <NavTab flexCenter={flexCenter} />
    </div>
  );
}

export default Example5;
