import React, { useCallback, useEffect, useMemo } from 'react';
import SceneName from './types/scene-name.ts';
import { SceneTransitionConfig } from './types/scene-config.ts';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import RenderIf from '../common/components/RenderIf.tsx';
import useAnimation from '../animations/use-animation.ts';
import { MdOutlineArrowForward, MdOutlineArrowBack } from 'react-icons/md';
import RestartButton from './RestartButton.tsx';

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
      w="lg"
      colorScheme="magenta"
      isLoading={isSceneTransitioningFromThis}
      isDisabled={isSceneTransitioning && !isSceneTransitioningFromThis}
    >
      {transitionConfig.buttonText === 'Back to Assembly' ||
      transitionConfig.buttonText === 'Back to Launch' ||
      transitionConfig.buttonText === 'Back to Cruise' ? (
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

const SceneControls: React.FC<{
  onChangeScene: (sceneName: SceneName) => void;
  onRestart: () => void;
  previousSceneTransition?: SceneTransitionConfig;
  nextSceneTransition?: SceneTransitionConfig;
}> = ({
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

  return (
    <>
      <Flex
        flexDirection={'row'}
        position="absolute"
        bottom={4}
        left={2}
        right={2}
        alignItems={'center'}
        alignContent={'center'}
        alignSelf={'center'}
      >
        {previousSceneTransition && (
          <SceneTransitionButton
            transitionConfig={previousSceneTransition}
            onClick={onChangeScene}
            isSceneTransitioning={isTransitioning}
            isSceneTransitioningFromThis={isTransitioningToPrevious}
          />
        )}
        <Spacer />
        {nextSceneTransition && (
          <SceneTransitionButton
            transitionConfig={nextSceneTransition}
            onClick={onChangeScene}
            isSceneTransitioning={isTransitioning}
            isSceneTransitioningFromThis={isTransitioningToNext}
          />
        )}
      </Flex>
      <RenderIf
        shouldRender={!!previousSceneTransition || !!nextSceneTransition}
      >
        <RestartButton onClick={onRestart} disabled={isTransitioning} />
      </RenderIf>
    </>
  );
};

export default SceneControls;
