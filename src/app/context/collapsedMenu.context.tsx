'use client'

import {createContext, useState, useContext, ReactNode} from 'react';

type CollapsedMenuType = {
  open: boolean;
  toggleOpen: () => void;
};

export const CollapsedMenuContext = createContext<CollapsedMenuType>({
  open: false,
  toggleOpen: () => null
});

export const useCollapsedMenu = () => useContext(CollapsedMenuContext);

export const CollapsedMenuProvider = ({ children }: { children: ReactNode}) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  const value = {
    open,
    toggleOpen
  };

  return <CollapsedMenuContext.Provider value={value}>{children}</CollapsedMenuContext.Provider>;
};