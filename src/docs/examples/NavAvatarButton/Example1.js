import React from 'react';
import { NavAvatarButton, tokens } from '@occmundial/occ-atomic';
const { nav } = tokens.colors;
function Example1() {

  return (
    <React.Fragment>
      <NavAvatarButton
        photo="https://i.pravatar.cc/300"
        onClick={() => console.log('clicked')}
      />
      <div style={{ padding: '8px 16px', background: nav.bg.inverse, display: 'inline-block' }}>
        <NavAvatarButton
          darkMode
          photo="https://i.pravatar.cc/300"
          onClick={() => console.log('clicked')}
        />
      </div>
    </React.Fragment>
  );
}

export default Example1;