import React, { useMemo } from 'react';
import { SceneTransitionConfig } from './types/scene-config.ts';
import SceneName from './types/scene-name.ts';
import SceneTransitionButton from './SceneTransitionButton.tsx';

/**
 * Provides 3D controls to transition from scene to scene
 *
 * @param onChangeScene Callback for when the scene should be changed
 * @param previousSceneTransition The configuration for the transition to the previous scene
 * @param nextSceneTransition The configuration for the transition to the next scene
 * @param props The <group/> element props
 */
const SceneControls: React.FC<
  {
    onChangeScene: (sceneName: SceneName) => void;
    previousSceneTransition?: SceneTransitionConfig;
    nextSceneTransition?: SceneTransitionConfig;
  } & JSX.IntrinsicElements['group']
> = ({
  onChangeScene,
  previousSceneTransition,
  nextSceneTransition,
  ...props
}) => {
  const controls = useMemo(() => {
    if (previousSceneTransition && nextSceneTransition) {
      return (
        <>
          <SceneTransitionButton
            transitionConfig={previousSceneTransition}
            onClick={onChangeScene}
            position={[-1.75, 0, 0]}
          />
          <SceneTransitionButton
            transitionConfig={nextSceneTransition}
            onClick={onChangeScene}
            position={[1.75, 0, 0]}
          />
        </>
      );
    }

    if (previousSceneTransition) {
      return (
        <SceneTransitionButton
          transitionConfig={previousSceneTransition}
          onClick={onChangeScene}
        />
      );
    }

    if (nextSceneTransition) {
      return (
        <SceneTransitionButton
          transitionConfig={nextSceneTransition}
          onClick={onChangeScene}
        />
      );
    }
  }, [nextSceneTransition, onChangeScene, previousSceneTransition]);

  return <group {...props}>{controls}</group>;
};

export default SceneControls;
