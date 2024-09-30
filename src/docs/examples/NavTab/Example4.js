/* NavTab with NavIcons switching */
import React, { useState } from 'react';
import { NavTab, Icon, colors } from '@occmundial/occ-atomic';

function Example4() {
  const [selected, setSelected] = useState(false);

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
      key: 1,
      type: 'button',
      icon: 'cart',
    },
    {
      key: 2,
      type: 'button',
      icon: 'messages'
    },
    {
      key: 3,
      type: 'button',
      text: 'Juan Alvez',
      size: 'md',
      theme: 'tertiaryWhite'
    }
  ];
  const center = [
    {
      key: 1,
      type: 'navButton',
      iconName: 'panel',
      label: 'Dashboard',
      selected: selected === 'dashboard',
      onClick: () => setSelected('dashboard'),
      showBar: true
    },
    {
      key: 2,
      type: 'navButton',
      iconName: 'search',
      label: 'Search',
      selected: selected === 'search',
      onClick: () => setSelected('search'),
      showBar: true
    },
    {
      key: 3,
      type: 'navButton',
      iconName: 'user',
      label: 'Profile',
      selected: selected === 'profile',
      onClick: () => setSelected('profile'),
      showBar: true
    }
  ];
  const right2 = [...right];
  right2[2] = {
    key: 3,
    type: 'button',
    text: 'Juan Alvez',
    size: 'md',
    theme: 'ghostGrey'
  };
  return (
    <div>
      <NavTab blue left={left} center={center} right={right} />
      <NavTab left={left2} center={center} right={right2} />
    </div>
  );
} 

export default Example4;
