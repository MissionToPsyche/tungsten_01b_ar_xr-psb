import React, { PropsWithChildren, useCallback, useState } from 'react';
import SettingsContext from './settings-context.ts';

/**
 * SettingsProvider Component
 * @param {PropsWithChildren} children - The child elements wrapped by the provider.
 * @returns JSX element wrapping the child components with the AR settings context.
 */
export const SettingsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [arEnabled, setArEnabled] = useState(true);

  const toggleAR = useCallback(() => {
    setArEnabled((prev) => !prev);
  }, []);

  return (
    <SettingsContext.Provider value={{ arEnabled, toggleAR }}>
      {children}
    </SettingsContext.Provider>
  );
};
