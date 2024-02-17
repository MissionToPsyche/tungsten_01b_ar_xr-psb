import { SettingsContextType } from '../settings-context.ts';

const value: SettingsContextType = {
  arEnabled: false,
  toggleAR: vi.fn()
};

const useSettings = vi.fn(() => value);

export default useSettings;
