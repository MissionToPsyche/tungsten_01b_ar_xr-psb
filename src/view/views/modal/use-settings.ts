import { useContext } from 'react';
import SettingsContext from './settings-context.ts';

/**
 * Custom hook to access AR settings from the context.
 * @function useSetting
 * @returns {SettingsContextType} The context value containing AR settings.
 * @throws {Error} Throws an error if used outside of a SettingsProvider.
 */
function useSetting() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSetting must be used within SettingsProvider');
  }

  return context;
}
export default useSetting;
