import React, { useEffect } from 'react';
import useExplode from '../common/explode/use-explode.ts';
import useAnimation from './use-animation.ts';
import AnimationName from './types/animation-name.ts';

/**
 * A component that manages the AssembleAnimation
 */
const AssembleAnimation: React.FC = () => {
  const { isAnimationActive, stopAnimation } = useAnimation();
  const { isExploded, toggleExploded, isAtRest } = useExplode();

  useEffect(() => {
    if (!isAnimationActive(AnimationName.ASSEMBLE)) {
      return;
    }

    if (isExploded) {
      toggleExploded();
    }

    if (!isExploded && isAtRest) {
      setTimeout(() => {
        stopAnimation(AnimationName.ASSEMBLE);
      }, 2000);
    }
  }, [isAnimationActive, isAtRest, isExploded, stopAnimation, toggleExploded]);

  return null;
};

export default AssembleAnimation;
