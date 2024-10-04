/* Menu */
import React from 'react';
import { Menu, Button } from '@occmundial/occ-atomic';

export default function Example1() {
  return (
    <div style={{ position: 'relative' }}>
      <Menu
        placement="bottom-start"
        triggerElement={
          (
            <div>
              <Button
                theme="ghostGrey"
              >Open</Button>
            </div>
          )
        }>
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 12 }}>
          <Button>Prueba menu item 1</Button>
          <Button>Prueba menu item 2</Button>
          <Button>Prueba menu item 3</Button>
          <Button>Prueba menu item 4</Button>
        </div>
      </Menu>
    </div>
  );
}
