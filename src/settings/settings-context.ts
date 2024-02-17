import { createContext } from 'react';

/**
 * SettingsContext
 *
 * This context provides access to settings related to AR (Augmented Reality).
 * It includes information about whether AR is enabled and a function to toggle its state.
 */
export interface SettingsContextType {
  arEnabled: boolean;
  toggleAR: () => void;
}

const SettingsContext = createContext<SettingsContextType | null>(null);

export default SettingsContext;
