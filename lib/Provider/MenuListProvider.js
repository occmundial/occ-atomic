import React, { createContext } from 'react';

export const MenuListContext = createContext({ dense: false });

// eslint-disable-next-line react/prop-types
export default function MenuListProvider({ children, dense = false }) {
  return (
    <MenuListContext.Provider value={{ dense }}>
      {children}
    </MenuListContext.Provider>
  );
}
