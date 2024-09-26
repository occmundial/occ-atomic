/** Component prop */
import React from 'react';
import { MenuUser } from '@occmundial/occ-atomic';

export default function Example3() {
  return (
    <React.Fragment>
      {[...Array(3).keys()].map(val => (
        <MenuUser
          key={val}
          title="Nombre Apellido"
          subtitle="ejemplo@correo.com"
          avatarProps={{
            photo: "https://i.pravatar.cc/300"
          }}
          component="a"
          href="#MenuUser"
        />
      ))}
    </ React.Fragment>
  );
}
