import { useContext } from 'react';
import SettingsContext from './settings-context.ts';

function useSetting() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSetting must be used within SettingsProvider")
  }

  return context;
}
export default useSetting;