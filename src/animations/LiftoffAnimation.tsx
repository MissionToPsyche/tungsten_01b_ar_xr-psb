import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import SmokeParticleSystem from '../common/particle/systems/smoke/SmokeParticleSystem';

/**
 * Liftoff animation for rocket
 */
const LiftoffAnimation: React.FC<JSX.IntrinsicElements['group']> = ({
  children,
  ...props
}) => {
  const groupRef = useRef<Group>(null);
  const { isAnimationActive, stopAnimation } = useAnimation();
  const [elapsed, setElapsed] = useState(0);

  useFrame((state, delta) => {
    if (groupRef.current == null) {
      return;
    }

    if (isAnimationActive(AnimationName.LIFTOFF)) {
      setElapsed(elapsed + delta);

      if (elapsed >= 0.4) {
        groupRef.current.position.y += delta * elapsed;
      }
      if (elapsed <= 5.5) {
        state.camera.position.setY(groupRef.current.position.y);
      }
      if (elapsed >= 9) {
        state.camera.position.setY(0);
        setElapsed(0);
        stopAnimation(AnimationName.LIFTOFF);
      }
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <SmokeParticleSystem
        visible={isAnimationActive(AnimationName.LIFTOFF)}
        position={[0.75, 1, 0]}
      />
      {children}
    </group>
  );
};

export default LiftoffAnimation;
