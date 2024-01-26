import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Create a context for the dialog with an initial value of null
const DialogContext = createContext<{ isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }>({ isOpen: false, setIsOpen: () => {} });

// Create a provider component to wrap the app and provide dialog state
export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);