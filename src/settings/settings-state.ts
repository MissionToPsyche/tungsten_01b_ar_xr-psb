import { atom } from 'recoil';
import { Settings } from './use-settings.ts';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const settingsState = atom<Settings>({
  key: 'settingsState',
  default: {
    arEnabled: true,
    audioEnabled: false,
    tooltipsEnabled: true
  },
  effects_UNSTABLE: [persistAtom]
});

export default settingsState;
