/** NavTab (Unlogged) */
import React, { useState } from 'react';
import { NavTab, Icon, grid } from '@occmundial/occ-atomic';

function Example1() {
  const [selected, setSelected] = useState('Vacantes');
  const left = [
    {
      key: 0,
      type: 'logo',
      logo: (
        <a href="#NavTab" style={{ display: 'flex' }}>
          <Icon iconName="occLogoWhite" />
        </a>
      )
    },
    {
      key: 1,
      type: 'navButton',
      label: 'Vacantes',
      className: 'only-desktop',
      selected: selected === 'Vacantes',
      showBar: true,
      onClick: () => setSelected('Vacantes')
    },
    {
      key: 2,
      type: 'navButton',
      label: 'Talento',
      className: 'only-desktop',
      selected: selected === 'Talento',
      showBar: true,
      onClick: () => setSelected('Talento')
    },
    {
      key: 3,
      type: 'navButton',
      label: 'Ayuda',
      className: 'only-desktop',
      selected: selected === 'Ayuda',
      showBar: true,
      onClick: () => setSelected('Ayuda')
    }
  ];
  const left2 = [...left];
  left2[0] = {
    key: 0,
    type: 'logo',
    logo: (
      <a href="#NavTab" style={{ display: 'flex' }}>
        <Icon iconName="occLogoBlue" />
      </a>
    )
  };
  const right = [
    {
      key: 0,
      type: 'button',
      text: 'Juan Alvez',
      size: 'md',
      className: 'only-desktop',
    },
    {
      key: 1,
      type: 'button',
      text: 'Juan Alvez',
      size: 'md',
      theme: 'tertiaryWhite',
      className: 'only-desktop',
    },
    {
      key: 2,
      type: 'button',
      icon: 'search'
    },
    {
      key: 3,
      type: 'button',
      className: 'only-mobile',
      icon: 'bars'
    },
  ];
  const right2 = [...right];
  right2[0] = {
    ...right[0],
    theme: 'ghostGrey'
  };
  right2[1] = {
    ...right[1],
    theme: 'tertiary'
  };
  return (
    <React.Fragment>
      <style>
        {`
          @media screen and (min-width: ${grid.sm}px) {
            .only-mobile {
              display: none;
            } 
          }
          @media screen and (max-width: ${grid.sm - 1}px) {
            .only-desktop {
              display: none;
            } 
          }
        `}
      </style>
      <NavTab isResponsive blue left={left} right={right} />
      <NavTab isResponsive left={left2} right={right2} />
    </React.Fragment>
  )
}

export default Example1;
