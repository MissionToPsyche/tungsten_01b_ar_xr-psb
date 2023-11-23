import React, { useCallback } from 'react';
import SceneName from './types/scene-name.ts';
import { SceneTransitionConfig } from './types/scene-config.ts';
import ARButton from '../common/components/ARButton.tsx';

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
  const onClickButton = useCallback(() => {
    onClick(transitionConfig.toScene);
  }, [onClick, transitionConfig.toScene]);

  return (
    <ARButton onClick={onClickButton} {...props}>
      {transitionConfig.buttonText}
    </ARButton>
  );
};

export default SceneTransitionButton;
