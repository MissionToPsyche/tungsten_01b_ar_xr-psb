import React, { useCallback, useEffect } from 'react';
import SceneName from './types/scene-name.ts';
import { SceneTransitionConfig } from './types/scene-config.ts';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import useAnimation from '../animations/use-animation.ts';
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';
import MenuBar from '../common/components/MenuBar.tsx';
import SceneTimeline from './SceneTimeline.tsx';

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

  const callback = useCallback(() => {
    onClick(transitionConfig.toScene);
  }, [onClick, transitionConfig.toScene]);

  useEffect(() => {
    if (transitionConfig.animation != null) {
      registerAnimation(
        transitionConfig.animation,
        callback,
        transitionConfig.audio
      );
    }
  }, [
    onClick,
    registerAnimation,
    transitionConfig.animation,
    transitionConfig.toScene,
    transitionConfig.audio,
    callback
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
  transitionToNext: boolean;
  transitionToPrev: boolean;
  transitioning: boolean;
  onChangeScene: (sceneName: SceneName) => void;
  onRestart: () => void;
  previousSceneTransition?: SceneTransitionConfig;
  nextSceneTransition?: SceneTransitionConfig;
}

const SceneControls: React.FC<SceneControlsProps> = ({
  transitionToNext,
  transitionToPrev,
  transitioning,
  onChangeScene,
  onRestart,
  previousSceneTransition,
  nextSceneTransition
}) => {
  return (
    <>
      <MenuBar
        hideArButton
        onClickRestartButton={onRestart}
        disableRestartButton={transitioning}
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
            isSceneTransitioning={transitioning}
            isSceneTransitioningFromThis={transitionToPrev}
            direction="back"
          />
        )}
        <Spacer />
        {nextSceneTransition && (
          <SceneTransitionButton
            transitionConfig={nextSceneTransition}
            onClick={onChangeScene}
            isSceneTransitioning={transitioning}
            isSceneTransitioningFromThis={transitionToNext}
            direction="forward"
          />
        )}
      </Flex>
      <SceneTimeline />
    </>
  );
};

export default SceneControls;
