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
      toScene: SceneName.VIBRATION_TESTING,
      buttonText: 'Next Scene'
    },
    artifactPaths: []
  },
  isTransitioning: false,
  isTransitioningToNext: false,
  isTransitioningToPrevious: false,
  setCurrentScene
}));

export default useScene;
