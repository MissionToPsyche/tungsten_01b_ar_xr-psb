import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import settingsState from './settings-state.ts';

/**
 * The settings for the application.
 */
export interface Settings {
  /**
   * Whether AR is enabled.
   */
  arEnabled: boolean;
  /**
   * Whether audio is enabled.
   */
  audioEnabled: boolean;
}

export interface SettingsActions {
  /**
   * Set whether AR is enabled.
   * @param enabled Whether AR is enabled.
   */
  setArEnabled: (enabled: boolean) => void;
  /**
   * Set whether audio is enabled.
   * @param enabled Whether audio is enabled.
   */
  setAudioEnabled: (enabled: boolean) => void;
}

/**
 * The state of settings.
 */
export interface SettingsState extends Settings, SettingsActions {}

/**
 * A hook to access settings.
 */
const useSettings = (): SettingsState => {
  const [state, setState] = useRecoilState(settingsState);

  const setArEnabled = useCallback(
    (enabled: boolean) => {
      setState((prevState) => ({
        ...prevState,
        arEnabled: enabled
      }));
    },
    [setState]
  );

  const setAudioEnabled = useCallback(
    (enabled: boolean) => {
      setState((prevState) => ({
        ...prevState,
        audioEnabled: enabled
      }));
    },
    [setState]
  );

  return { ...state, setArEnabled, setAudioEnabled };
};

export default useSettings;
