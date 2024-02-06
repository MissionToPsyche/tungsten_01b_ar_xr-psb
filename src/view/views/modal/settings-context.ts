import { createContext } from 'react';

interface SettingsContextType {
  arEnabled: boolean;
  toggleAR: () => void;
}
const SettingsContext = createContext<SettingsContextType | null>(null);
export default  SettingsContext;