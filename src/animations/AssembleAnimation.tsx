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

    let timeout: NodeJS.Timeout;

    if (!isExploded && isAtRest) {
      timeout = setTimeout(() => {
        stopAnimation(AnimationName.ASSEMBLE);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isAnimationActive, isAtRest, isExploded, stopAnimation, toggleExploded]);

  return null;
};

export default AssembleAnimation;
