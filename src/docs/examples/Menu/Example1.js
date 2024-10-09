/* Menu */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, NavAvatarButton, WindowSize, grid, Drawer, NavTab } from '@occmundial/occ-atomic';

function Example1({ winWidth }) {
  const [open, setOpen] = useState(false);
  const [reference, setReference] = useState(null);
  const isMobile = winWidth < grid.xs;
  console.log({ winWidth, isMobile, grid, reference });

  return (
    <div style={{ position: 'relative' }}>
      <NavAvatarButton
        theme="ghost"
        photo="https://i.pravatar.cc/300"
        onClick={() => setOpen(open => !open)}
        ref={setReference}
      />
      {!isMobile ? (
        <Menu
          placement="bottom-start"
          open={open}
          setOpen={setOpen}
          triggerRef={reference}
        >
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 12 }}>
            <Button>Prueba menu item 1</Button>
            <Button>Prueba menu item 2</Button>
            <Button>Prueba menu item 3</Button>
            <Button>Prueba menu item 4</Button>
          </div>
        </Menu>
      ) : (
        <Drawer header={
          <NavTab left={[
            {
              key: 'icon',
              type: 'navButton',
              iconName: 'x',
              onClick: () => setOpen(false)
            }
          ]}
          />
        }>
          This is a default Drawer
        </Drawer>
      )}
    </div>
  );
}

Example1.propTypes = {
  winWidth: PropTypes.number
};

export default WindowSize(Example1);
