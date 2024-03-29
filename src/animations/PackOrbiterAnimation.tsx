import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import filledVector from '../common/utils/filled-vector';
import { PackOrbiter } from '../artifacts/PackOrbiter';

const orbiterScale = filledVector(1.2);

/**
 * Pack Orbiter Animation
 */
const PackOrbiterAnimation: React.FC<JSX.IntrinsicElements['group']> = () => {
  const { isAnimationActive, stopAnimation } = useAnimation();
  const [elapsed, setElapsed] = useState(0);
  const orbiterRef = useRef<Group>(null);
  const isActive = useMemo(() => {
    return isAnimationActive(AnimationName.PACK_ORBITER);
  }, [isAnimationActive]);

  useFrame((_, delta) => {
    if (orbiterRef.current == null) {
      return;
    }

    if (!isAnimationActive(AnimationName.PACK_ORBITER)) {
      return;
    }

    setElapsed(elapsed + delta);

    if (elapsed > 8) {
      stopAnimation(AnimationName.PACK_ORBITER);
    }
  });

  return (
    <group>
      <group ref={orbiterRef}>
        <PackOrbiter
          animatePacking
          orbiterPacked={isActive}
          scale={orbiterScale}
          position={[0, 0, 1]}
          rotation={[0.2, 0, 0]}
        />
      </group>
    </group>
  );
};

export default PackOrbiterAnimation;
