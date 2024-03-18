import { atom } from 'recoil';
import { Scene } from './use-scene.ts';
import SceneName from './types/scene-name.ts';

const sceneState = atom<Scene>({
  key: 'sceneState',
  default: {
    currentScene: SceneName.UNSET
  }
});

export default sceneState;
