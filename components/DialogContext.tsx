// DialogContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for the dialog with an initial value of null
const DialogContext = createContext({ isOpen: false, setIsOpen: () => {} });

// Create a provider component to wrap the app and provide dialog state
export const DialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

// Create a custom hook to consume the dialog context
export const useDialog = () => useContext(DialogContext);
