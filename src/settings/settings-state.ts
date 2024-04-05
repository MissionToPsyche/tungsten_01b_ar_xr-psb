import { atom } from 'recoil';
import { Settings } from './use-settings.ts';

const settingsState = atom<Settings>({
  key: 'settingsState',
  default: {
    arEnabled: true,
    audioEnabled: true,
    tooltipsEnabled: true
  }
});

export default settingsState;
