import React, { useEffect } from 'react';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';

/**
 * Back Animation for transitioning to previous scene
 */
const BackAnimation: React.FC<JSX.IntrinsicElements['group']> = ({
  children,
  ...props
}) => {
  const { isAnimationActive, stopAnimation } = useAnimation();

  useEffect(() => {
    if (isAnimationActive(AnimationName.BACK)) {
      stopAnimation(AnimationName.BACK);
    }
  }, [isAnimationActive, stopAnimation]);

  return <group {...props}>{children}</group>;
};

export default BackAnimation;
