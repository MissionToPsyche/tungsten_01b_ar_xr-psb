import { atom } from 'recoil';
import { Preferences } from './use-preferences.ts';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const preferencesState = atom<Preferences>({
  key: 'preferencesState',
  default: {
    tutorialClicked: false
  },
  effects_UNSTABLE: [persistAtom]
});

export default preferencesState;
