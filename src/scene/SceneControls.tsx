import React, { useCallback, useEffect, useMemo } from 'react';
import SceneName from './types/scene-name.ts';
import { SceneTransitionConfig } from './types/scene-config.ts';
import { Button, Stack } from '@chakra-ui/react';
import RenderIf from '../common/components/RenderIf.tsx';
import useAnimation from '../animations/use-animation.ts';

const SceneTransitionButton: React.FC<{
  transitionConfig: SceneTransitionConfig;
  onClick: (toScene: SceneName) => void;
  isSceneTransitioning: boolean;
  isSceneTransitioningFromThis: boolean;
}> = ({
  transitionConfig,
  onClick,
  isSceneTransitioning,
  isSceneTransitioningFromThis
}) => {
  const { registerAnimation, startAnimation } = useAnimation();

  useEffect(() => {
    if (transitionConfig.animation != null) {
      registerAnimation(
        transitionConfig.animation,
        () => {
          onClick(transitionConfig.toScene);
        },
        transitionConfig.audio
      );
    }
  }, [
    onClick,
    registerAnimation,
    transitionConfig.animation,
    transitionConfig.toScene,
    transitionConfig.audio
  ]);

  const onClickButton = useCallback(() => {
    if (transitionConfig.animation != null) {
      startAnimation(transitionConfig.animation);
    } else {
      onClick(transitionConfig.toScene);
    }
  }, [
    onClick,
    transitionConfig.toScene,
    transitionConfig.animation,
    startAnimation
  ]);

  return (
    <Button
      onClick={onClickButton}
      w="full"
      colorScheme="magenta"
      isLoading={isSceneTransitioningFromThis}
      isDisabled={isSceneTransitioning && !isSceneTransitioningFromThis}
    >
      {transitionConfig.buttonText}
    </Button>
  );
};

const SceneControls: React.FC<{
  onTransition: (state: boolean) => void;
  onChangeScene: (sceneName: SceneName) => void;
  onRestart: () => void;
  previousSceneTransition?: SceneTransitionConfig;
  nextSceneTransition?: SceneTransitionConfig;
}> = ({
  onTransition,
  onChangeScene,
  onRestart,
  previousSceneTransition,
  nextSceneTransition
}) => {
  const { isAnimationActive } = useAnimation();

  const isTransitioningToPrevious = useMemo(() => {
    if (previousSceneTransition?.animation == null) {
      return false;
    }

    return isAnimationActive(previousSceneTransition.animation);
  }, [isAnimationActive, previousSceneTransition]);

  const isTransitioningToNext = useMemo(() => {
    if (nextSceneTransition?.animation == null) {
      return false;
    }

    return isAnimationActive(nextSceneTransition.animation);
  }, [isAnimationActive, nextSceneTransition]);

  const isTransitioning = useMemo(() => {
    return isTransitioningToPrevious || isTransitioningToNext;
  }, [isTransitioningToNext, isTransitioningToPrevious]);

  useEffect(() => {
    onTransition(isTransitioning);
  }, [isTransitioning, onTransition]);

  return (
    <Stack direction="row" position="absolute" bottom={2} left={2} right={2}>
      {previousSceneTransition && (
        <SceneTransitionButton
          transitionConfig={previousSceneTransition}
          onClick={onChangeScene}
          isSceneTransitioning={isTransitioning}
          isSceneTransitioningFromThis={isTransitioningToPrevious}
        />
      )}
      <RenderIf
        shouldRender={!!previousSceneTransition || !!nextSceneTransition}
      >
        <Button
          onClick={onRestart}
          w="full"
          colorScheme="gray"
          isDisabled={isTransitioning}
        >
          Restart
        </Button>
      </RenderIf>
      {nextSceneTransition && (
        <SceneTransitionButton
          transitionConfig={nextSceneTransition}
          onClick={onChangeScene}
          isSceneTransitioning={isTransitioning}
          isSceneTransitioningFromThis={isTransitioningToNext}
        />
      )}
    </Stack>
  );
};

export default SceneControls;
