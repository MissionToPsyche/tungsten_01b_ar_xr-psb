import { SettingsState } from '../use-settings.ts';

const value: SettingsState = {
  arEnabled: false,
  audioEnabled: false,
  setArEnabled: vi.fn(),
  setAudioEnabled: vi.fn()
};

const useSettings = vi.fn(() => value);

export default useSettings;
