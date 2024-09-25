/** Menu User */
import React from 'react';
import { MenuUser } from '@occmundial/occ-atomic';

export default function Example1() {
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
        />
      ))}
    </ React.Fragment>
  );
}
