/** NavTab (Logged) */
import React, { useState } from 'react';
import { NavTab, Icon, NavAvatarButton, Menu, MenuList, MenuDivider, MenuUser, MenuItem, grid } from '@occmundial/occ-atomic';  

function MenuDropdown({ className,  darkMode = false, placement = 'left' }) {
  const [open, setOpen] = useState(false);

  const avatarButtonHandler = () => {
    setOpen(!open);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Menu placement={placement} triggerElement={
        (
          <div>
            <NavAvatarButton
              className={className}
              photo="https://i.pravatar.cc/300"
              darkMode={darkMode}
              onClick={avatarButtonHandler}
            />
          </div>
        )
      }>
        <MenuList component="nav" dense>
          <MenuUser
            title="Nombre Apellido"
            subtitle="ejemplo@correo.com"
            avatarProps={{
              photo: "https://i.pravatar.cc/300"
            }}
          />
          <MenuDivider style={{ margin: "4px 0" }} />
          <MenuItem component="a" href="#MenuList">
            Configuración
          </MenuItem>
          <MenuItem component="a" href="#MenuList">
            Administrador de cuentas
          </MenuItem>
          <MenuItem component="a" href="#MenuList">
            Datos de facturación
          </MenuItem>
          <MenuItem component="a" href="#MenuList">
            Reporte de uso
          </MenuItem>
          <MenuItem component="a" href="#MenuList">
            Estado de cuenta
          </MenuItem>
          <MenuDivider style={{ margin: "4px 0" }} />
          <MenuItem component="a" href="#MenuList">
            Sitio de candidatos
          </MenuItem>
          <MenuItem onClick={() => console.log('logged-out')}>
            Cerrar sesión
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

function Example2() {
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
      className: 'only-desktop',
      icon: 'search'
    },
    {
      key: 1,
      type: 'custom',
      custom: <MenuDropdown className={{ button: "only-desktop" }} darkMode />
    },
    {
      key: 2,
      type: 'button',
      className: 'only-mobile',
      icon: 'bars'
    },
  ];
  const right2 = [...right];
  right2[1] = {
    ...right[1],
    custom: <MenuDropdown className={{ button: "only-desktop" }} />
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

export default Example2;
