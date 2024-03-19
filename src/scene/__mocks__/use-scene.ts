import { SceneState } from '../use-scene.ts';
import SceneName from '../types/scene-name.ts';
import MockAssembleScene from './MockAssembleScene.tsx';

const setCurrentScene = vi.fn();

const useScene = vi.fn<[], SceneState>(() => ({
  currentScene: SceneName.ASSEMBLY,
  currentSceneConfig: {
    component: MockAssembleScene,
    markerUrl: '/hello',
    nextSceneTransition: {
      toScene: SceneName.LAUNCH,
      buttonText: 'Next Scene'
    }
  },
  isTransitioning: false,
  isTransitioningToNext: false,
  isTransitioningToPrevious: false,
  setCurrentScene
}));

export default useScene;
