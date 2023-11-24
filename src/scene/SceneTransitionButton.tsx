import React, { useCallback } from 'react';
import SceneName from './types/scene-name.ts';
import { SceneTransitionConfig } from './types/scene-config.ts';
import ARButton from '../common/components/ARButton.tsx';
import { useToken } from '@chakra-ui/react';
import useAnimation from '../animations/use-animation.ts';

/**
 * A button that triggers a scene transition
 *
 * @param transitionConfig The scene transition config that corresponds to this button
 * @param onClick Callback for when the button is clicked
 * @param props Props for the <group/> component
 */
const SceneTransitionButton: React.FC<
  Omit<JSX.IntrinsicElements['group'], 'onClick'> & {
    transitionConfig: SceneTransitionConfig;
    onClick: (toScene: SceneName) => void;
  }
> = ({ transitionConfig, onClick, ...props }) => {
  const { setActive, setOnComplete, setCurrent } = useAnimation();
  const onClickButton = useCallback(() => {
    if (transitionConfig.animation != null) {
      setOnComplete(() => {
        onClick(transitionConfig.toScene);
      });
      setCurrent(transitionConfig.animation);
      setActive(true);
    } else {
      onClick(transitionConfig.toScene);
    }
  }, [
    onClick,
    transitionConfig.toScene,
    transitionConfig.animation,
    setActive,
    setCurrent,
    setOnComplete
  ]);
  const [bg, bgActive] = useToken('colors', ['magenta.300', 'magenta.200']);
  return (
    <ARButton
      backgroundColor={bg}
      backgroundActiveColor={bgActive}
      onClick={onClickButton}
      {...props}
    >
      {transitionConfig.buttonText}
    </ARButton>
  );
};

export default SceneTransitionButton;
