import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import SmokeParticleSystem from '../common/particle/systems/smoke/SmokeParticleSystem';
import ThrusterParticleSystem from '../common/particle/systems/thruster/ThrusterParticleSystem';

const speed = 2;

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

  useFrame(({ camera }, delta) => {
    if (groupRef.current == null) {
      return;
    }

    if (isAnimationActive(AnimationName.LIFTOFF)) {
      setElapsed((currentElapsed) => currentElapsed + delta);
      const deltaSpeed = delta * speed;

      if (elapsed >= 0.6) {
        groupRef.current.position.y += deltaSpeed;
        camera.position.y += deltaSpeed;
        // groupRef.current.translateY(deltaSpeed);
      }

      if (elapsed >= 8) {
        setElapsed(0);
        camera.position.setY(0);
        stopAnimation(AnimationName.LIFTOFF);
      }
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <ThrusterParticleSystem
        position={[0.62, 0.65, 0]}
        visible={isAnimationActive(AnimationName.LIFTOFF)}
      />
      <SmokeParticleSystem
        visible={!isAnimationActive(AnimationName.LIFTOFF)}
        position={[0.75, 1, 0]}
      />
      {children}
    </group>
  );
};

export default LiftoffAnimation;
