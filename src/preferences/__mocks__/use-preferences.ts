import { PreferencesState } from '../use-preferences.ts';
import { vi } from 'vitest';

const state: PreferencesState = {
  tutorialClicked: false,
  setTutorialClicked: vi.fn()
};

const usePreferences = vi.fn(() => state);

export default usePreferences;
