/** Divider  */
import React from 'react';
import { MenuUser, MenuItem, MenuList, MenuDivider } from '@occmundial/occ-atomic';

export default class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <MenuList>
        <MenuUser
          title="Nombre Apellido"
          subtitle="ejemplo@correo.com"
          avatarProps={{
            photo: "https://i.pravatar.cc/300"
          }}
        />
        <MenuDivider style={{ margin: "4px 0" }} />
        <MenuItem>Configuración</MenuItem>
        <MenuItem>Sitio de empresas</MenuItem>
        <MenuDivider style={{ margin: "4px 0" }} />
        <MenuItem>Cerrar sesión</MenuItem>
      </MenuList>
    );
  }
}
