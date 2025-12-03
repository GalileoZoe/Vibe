// context/TouchIDContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface TouchIDContextProps {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

const TouchIDContext = createContext<TouchIDContextProps>({
  authenticated: false,
  setAuthenticated: () => {},
});

export const TouchIDProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <TouchIDContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </TouchIDContext.Provider>
  );
};

export const useTouchID = () => useContext(TouchIDContext);
