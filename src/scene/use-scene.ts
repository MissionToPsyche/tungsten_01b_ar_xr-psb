import sceneState from './scene-state.ts';
import { useRecoilState } from 'recoil';
import SceneName from './types/scene-name.ts';
import { useCallback, useMemo } from 'react';
import useSceneConfig from './use-scene-config.ts';
import useAnimation from '../animations/use-animation.ts';
import { IndividualSceneConfig } from './types/scene-config.ts';

export interface Scene {
  currentScene: SceneName;
}

export interface SceneActions {
  setCurrentScene: (scene: SceneName) => void;
}

export interface SceneState extends Scene, SceneActions {
  currentSceneConfig: IndividualSceneConfig;
  isTransitioningToNext: boolean;
  isTransitioningToPrevious: boolean;
  isTransitioning: boolean;
}

const useScene = (): SceneState => {
  const [state, setState] = useRecoilState(sceneState);
  const config = useSceneConfig();
  const { isAnimationActive } = useAnimation();

  const currentScene = useMemo(
    () =>
      state.currentScene === SceneName.UNSET
        ? config.defaultScene
        : state.currentScene,
    [state.currentScene, config.defaultScene]
  );

  const currentSceneConfig = config.scenes[currentScene];

  const isTransitioningToPrevious = useMemo(() => {
    if (currentSceneConfig.previousSceneTransition?.animation == null) {
      return false;
    }

    return isAnimationActive(
      currentSceneConfig.previousSceneTransition.animation
    );
  }, [isAnimationActive, currentSceneConfig.previousSceneTransition]);

  const isTransitioningToNext = useMemo(() => {
    if (currentSceneConfig.nextSceneTransition?.animation == null) {
      return false;
    }

    return isAnimationActive(currentSceneConfig.nextSceneTransition.animation);
  }, [isAnimationActive, currentSceneConfig.nextSceneTransition]);

  const isTransitioning = useMemo(() => {
    return isTransitioningToPrevious || isTransitioningToNext;
  }, [isTransitioningToNext, isTransitioningToPrevious]);

  const setCurrentScene = useCallback(
    (scene: SceneName) => {
      setState((prevState) => ({
        ...prevState,
        currentScene: scene
      }));
    },
    [setState]
  );

  return useMemo(
    () => ({
      ...state,
      currentScene,
      currentSceneConfig,
      isTransitioningToNext,
      isTransitioningToPrevious,
      isTransitioning,
      setCurrentScene
    }),
    [
      state,
      currentScene,
      currentSceneConfig,
      isTransitioningToNext,
      isTransitioningToPrevious,
      isTransitioning,
      setCurrentScene
    ]
  );
};

export default useScene;
