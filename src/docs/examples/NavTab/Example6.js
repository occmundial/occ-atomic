/* [Deprecated] NavTab with NavTop */
import React, { useState } from 'react';
import { NavTab, Icon } from '@occmundial/occ-atomic';

function Example6() {
  const [dropdown, setDropdown] = useState(false);
  const left = [
    {
      key: 0,
      type: 'logo',
      logo: (
        <a href="#NavTab">
          <Icon iconName="occLogoWhite" />   
        </a>
      )
    },
    {
      key: 1,
      type: 'dropdownLink',
      text: 'Dropdown link',
      onClick: () => setDropdown(!dropdown),
      selected: dropdown
    },
    {
      key: 2,
      type: 'link',
      text: 'Standard link',
      link: '#NavTab'
    }
  ];
  const right = [
    {
      key: 1,
      type: 'button',
      text: 'Primary CTA',
      theme: 'primary'
    },
    {
      key: 2,
      type: 'button',
      text: 'Secondary CTA',
      theme: 'ghostWhite'
    }
  ];
  const right2 = [
    {
      key: 1,
      type: 'button',
      text: 'Primary CTA',
      theme: 'ghostPink'
    },
    {
      key: 2,
      type: 'button',
      text: 'Secondary CTA',
      theme: 'ghostGrey'
    }
  ];
  const top = [
    {
      key: 1,
      text: 'First link',
      link: '#NavTab'
    },
    {
      key: 2,
      text: 'Current link',
      link: '#NavTab',
      selected: true
    },
    {
      key: 3,
      text: 'onClick item',
      onClick: () => { console.log('whatever'); }
    }
  ];
  const left2 = [...left];
  left2[0] = {
    key: 0,
    type: 'custom',
    custom: (
      <a href="#NavTab" style={{ marginRight: 32, display: 'inline-block' }}>
        <Icon iconName="occLogoBlue" />
      </a>
    )
  };
  return (
    <div>
      <NavTab top={top} blue left={left} right={right} />
      <NavTab top={top} left={left2} right={right2} />
    </div>
  );
}

export default Example6;
