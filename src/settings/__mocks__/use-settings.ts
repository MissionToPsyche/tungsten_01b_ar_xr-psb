import { SettingsState } from '../use-settings.ts';

const value: SettingsState = {
  arEnabled: false,
  audioEnabled: false,
  tooltipsEnabled: false,
  setArEnabled: vi.fn(),
  setAudioEnabled: vi.fn(),
  setTooltipsEnabled: vi.fn()
};

const useSettings = vi.fn(() => value);

export default useSettings;
