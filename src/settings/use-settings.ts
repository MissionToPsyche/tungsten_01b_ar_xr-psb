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
  /**
   * Whether tooltips are enabled.
   */
  tooltipsEnabled: boolean;
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
  /**
   * Set whether tooltips are enabled.
   * @param enabled Whether tooltips are enabled.
   */
  setTooltipsEnabled: (enabled: boolean) => void;
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

  const setTooltipsEnabled = useCallback(
    (enabled: boolean) => {
      setState((prevState) => ({
        ...prevState,
        tooltipsEnabled: enabled
      }));
    },
    [setState]
  );

  return { ...state, setArEnabled, setAudioEnabled, setTooltipsEnabled };
};

export default useSettings;
