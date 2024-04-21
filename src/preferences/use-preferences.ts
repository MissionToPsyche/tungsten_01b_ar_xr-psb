import preferencesState from './preferences-state.ts';
import { useRecoilState } from 'recoil';
import { useCallback, useMemo } from 'react';

export interface Preferences {
  tutorialClicked: boolean;
}

export interface PreferencesActions {
  setTutorialClicked: (tutorialClicked: boolean) => void;
}

export interface PreferencesState extends Preferences, PreferencesActions {}

const usePreferences = (): PreferencesState => {
  const [state, setState] = useRecoilState(preferencesState);

  const setTutorialClicked = useCallback(
    (tutorialClicked: boolean) => {
      setState((prev) => ({
        ...prev,
        tutorialClicked
      }));
    },
    [setState]
  );

  return useMemo(
    () => ({
      ...state,
      setTutorialClicked
    }),
    [setTutorialClicked, state]
  );
};

export default usePreferences;
