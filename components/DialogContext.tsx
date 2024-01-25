// DialogContext.js
import React, { createContext, useContext, useState } from 'react';

const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
