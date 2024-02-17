import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState
} from 'react';
import SettingsContext from './settings-context.ts';

/**
 * SettingsProvider
 * @param children - The children to render within the provider.
 */
const SettingsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [arEnabled, setArEnabled] = useState(true);

  const toggleAR = useCallback(() => {
    setArEnabled((prev) => !prev);
  }, []);

  const value = useMemo(() => ({ arEnabled, toggleAR }), [arEnabled, toggleAR]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
