import React, { useMemo } from 'react';
import { SceneTransitionConfig } from './types/scene-config.ts';
import SceneName from './types/scene-name.ts';
import SceneTransitionButton from './SceneTransitionButton.tsx';
import RestartTimelineButton from './RestartTimelineButton.tsx';

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
    onRestart: () => void;
    previousSceneTransition?: SceneTransitionConfig;
    nextSceneTransition?: SceneTransitionConfig;
  } & JSX.IntrinsicElements['group']
> = ({
  onChangeScene,
  onRestart,
  previousSceneTransition,
  nextSceneTransition,
  ...props
}) => {
  const controls = useMemo(() => {
    if (previousSceneTransition && nextSceneTransition) {
      return (
        <>
          <RestartTimelineButton onClick={onRestart} />
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
        <>
          <RestartTimelineButton onClick={onRestart} />
          <SceneTransitionButton
            transitionConfig={previousSceneTransition}
            onClick={onChangeScene}
          />
        </>
      );
    }
    if (nextSceneTransition) {
      return (
        <>
          <RestartTimelineButton onClick={onRestart} />
          <SceneTransitionButton
            transitionConfig={nextSceneTransition}
            onClick={onChangeScene}
          />
        </>
      );
    }
  }, [nextSceneTransition, onChangeScene, onRestart, previousSceneTransition]);

  return <group {...props}>{controls}</group>;
};

export default SceneControls;
