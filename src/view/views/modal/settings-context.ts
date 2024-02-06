import { createContext } from 'react';

/**
 * SettingsContext
 *
 * This context provides access to settings related to AR (Augmented Reality).
 * It includes information about whether AR is enabled and a function to toggle its state.
 *
 * @typedef {Object} SettingsContextType
 * @property {boolean} arEnabled - A boolean indicating whether AR is enabled.
 * @property {Function} toggleAR - A function to toggle the AR state.
 *
 * @constant {Object} SettingsContext - The context object created using createContext from React.
 * @type {React.Context<SettingsContextType | null>}
 * @default null
 *
 * @exports SettingsContext - The SettingsContext object.
 */
interface SettingsContextType {
  arEnabled: boolean;
  toggleAR: () => void;
}
const SettingsContext = createContext<SettingsContextType | null>(null);
export default SettingsContext;
