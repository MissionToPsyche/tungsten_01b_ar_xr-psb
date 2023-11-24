import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import SmokeParticleSystem from '../common/particle/systems/smoke/SmokeParticleSystem';

let elapsed = 0;

/**
 * Liftoff animation for rocket
 */
const Liftoff: React.FC<JSX.IntrinsicElements['group']> = ({
  children,
  ...props
}) => {
  const groupRef = useRef<Group>(null);
  const { active, setActive, current } = useAnimation();
  useFrame((state, delta) => {
    if (groupRef.current == null) {
      return;
    }

    if (active && current == AnimationName.LIFTOFF) {
      elapsed += delta;

      if (elapsed >= 0.4) {
        groupRef.current.position.y += delta * elapsed;
      }
      if (elapsed <= 5.5) {
        state.camera.position.setY(groupRef.current.position.y);
      }
      if (elapsed >= 9) {
        state.camera.position.setY(0);
        elapsed = 0;
        setActive(false);
      }
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <SmokeParticleSystem visible={active} position={[0.75, 1, 0]} />
      {children}
    </group>
  );
};

export default Liftoff;
