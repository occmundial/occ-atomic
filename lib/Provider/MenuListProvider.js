import React, { createContext, useContext } from 'react';

export const MenuListContext = createContext({ dense: false });

export const useMenuListContext = () => {
  return useContext(MenuListContext);
};

// eslint-disable-next-line react/prop-types
export default function MenuListProvider({ children, dense = false }) {
  return (
    <MenuListContext.Provider value={{ dense }}>
      {children}
    </MenuListContext.Provider>
  );
}
