import { useContext } from 'react';
import SettingsContext from './settings-context.ts';

/**
 * A hook to access the settings context.
 */
const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }

  return context;
};
export default useSettings;
