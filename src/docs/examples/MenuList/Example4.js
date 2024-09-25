/** Menu List (dense) with MenuItem */
import React from 'react';
import { MenuUser, MenuItem, MenuList, MenuDivider } from '@occmundial/occ-atomic';

export default class Example1 extends React.Component {
  render() {
    return (
      <MenuList component="nav" margin="size-3" dense>
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
    );
  }
}
