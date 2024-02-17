import React, { useCallback, useEffect, useMemo } from 'react';
import SceneName from './types/scene-name.ts';
import { SceneTransitionConfig } from './types/scene-config.ts';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import useAnimation from '../animations/use-animation.ts';
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';
import MenuBar from '../common/components/MenuBar.tsx';

const SceneTransitionButton: React.FC<{
  transitionConfig: SceneTransitionConfig;
  onClick: (toScene: SceneName) => void;
  isSceneTransitioning: boolean;
  isSceneTransitioningFromThis: boolean;
  direction: 'forward' | 'back';
}> = ({
  transitionConfig,
  onClick,
  isSceneTransitioning,
  isSceneTransitioningFromThis,
  direction
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
      w="lg"
      colorScheme="magenta"
      isLoading={isSceneTransitioningFromThis}
      isDisabled={isSceneTransitioning && !isSceneTransitioningFromThis}
    >
      {direction === 'back' ? (
        <>
          <MdOutlineArrowBack />
          {transitionConfig.buttonText}
        </>
      ) : (
        <>
          {transitionConfig.buttonText}
          <MdOutlineArrowForward />
        </>
      )}
    </Button>
  );
};

export interface SceneControlsProps {
  onTransition: (state: boolean) => void;
  onChangeScene: (sceneName: SceneName) => void;
  onRestart: () => void;
  previousSceneTransition?: SceneTransitionConfig;
  nextSceneTransition?: SceneTransitionConfig;
}

const SceneControls: React.FC<SceneControlsProps> = ({
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
    <>
      <MenuBar
        hideArButton
        onClickRestartButton={onRestart}
        disableRestartButton={isTransitioning}
        hideRestartButton={!previousSceneTransition && !nextSceneTransition}
      />
      <Flex
        flexDirection={'row'}
        position="absolute"
        bottom={4}
        left={2}
        right={2}
        alignItems={'center'}
        alignContent={'center'}
        alignSelf={'center'}
        gap={1}
      >
        {previousSceneTransition && (
          <SceneTransitionButton
            transitionConfig={previousSceneTransition}
            onClick={onChangeScene}
            isSceneTransitioning={isTransitioning}
            isSceneTransitioningFromThis={isTransitioningToPrevious}
            direction="back"
          />
        )}
        <Spacer />
        {nextSceneTransition && (
          <SceneTransitionButton
            transitionConfig={nextSceneTransition}
            onClick={onChangeScene}
            isSceneTransitioning={isTransitioning}
            isSceneTransitioningFromThis={isTransitioningToNext}
            direction="forward"
          />
        )}
      </Flex>
    </>
  );
};

export default SceneControls;
