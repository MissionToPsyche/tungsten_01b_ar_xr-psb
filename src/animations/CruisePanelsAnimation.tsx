import React, { useEffect } from 'react';
import useExplode from '../common/explode/use-explode.ts';
import useAnimation from './use-animation.ts';
import AnimationName from './types/animation-name.ts';

/**
 * Cruise Solar Panel Animation
 */
const CruisePanelsAnimation: React.FC = () => {
  const { isAnimationActive, stopAnimation } = useAnimation();
  const { isExploded, toggleExploded, isAtRest } = useExplode();

  useEffect(() => {
    if (!isAnimationActive(AnimationName.CRUISE_PANELS)) {
      return;
    }

    if (isExploded) {
      toggleExploded();
    }

    let timeout: NodeJS.Timeout;

    if (!isExploded && isAtRest) {
      timeout = setTimeout(() => {
        stopAnimation(AnimationName.CRUISE_PANELS);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isAnimationActive, isAtRest, isExploded, stopAnimation, toggleExploded]);

  return null;
};

export default CruisePanelsAnimation;
