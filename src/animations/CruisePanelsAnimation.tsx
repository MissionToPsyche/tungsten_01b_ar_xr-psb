import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import { Earth } from '../artifacts/Earth';
import { CruiseOrbiter } from '../artifacts/CruiseOrbiter';

/**
 * Cruise Solar Panel Animation
 */
const CruisePanelsAnimation: React.FC<JSX.IntrinsicElements['group']> = ({
  ...props
}) => {
  const { isAnimationActive, stopAnimation } = useAnimation();
  const [elapsed, setElapsed] = useState(0);
  const earthRef = useRef<Group>(null);
  const orbiterRef = useRef<Group>(null);
  const isActive = useMemo(() => {
    return isAnimationActive(AnimationName.CRUISE_PANELS);
  }, [isAnimationActive]);

  useFrame((_, delta) => {
    if (earthRef.current == null || orbiterRef.current == null) {
      return;
    }

    if (!isAnimationActive(AnimationName.CRUISE_PANELS)) {
      return;
    }

    setElapsed(elapsed + delta);

    if (elapsed > 15) {
      stopAnimation(AnimationName.CRUISE_PANELS);
    }
  });

  return (
    <group>
      <group ref={orbiterRef}>
        <CruiseOrbiter
          animatePanels
          panelsOpen={isActive}
          thrustersOn={false}
          rotation={[Math.PI / 5, Math.PI / 5, Math.PI / 6]}
        />
      </group>
      <group ref={earthRef} {...props}>
        <Earth />
      </group>
    </group>
  );
};

export default CruisePanelsAnimation;
