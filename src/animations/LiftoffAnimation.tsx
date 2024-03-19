import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import SmokeParticleSystem from '../common/particle/systems/smoke/SmokeParticleSystem';
import ThrusterParticleSystem from '../common/particle/systems/thruster/ThrusterParticleSystem';
import useSettings from '../settings/use-settings';

const thrusterStartingColor = new Color('#FFDD00');
const thrusterEndingColor = new Color('#FFF2BD');

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
  const { arEnabled } = useSettings();

  useFrame((state, delta) => {
    if (groupRef.current == null) {
      return;
    }

    if (isAnimationActive(AnimationName.LIFTOFF)) {
      setElapsed(elapsed + delta);

      if (elapsed >= 0.4) {
        groupRef.current.position.y += delta * elapsed;
      }

      if (elapsed >= 3 && elapsed <= 9 && !arEnabled) {
        if (elapsed <= 8) {
          state.camera.rotation.x += delta * 0.2;
        }
        groupRef.current.position.y += delta * elapsed;
      }

      if (elapsed >= 9) {
        setElapsed(0);
        stopAnimation(AnimationName.LIFTOFF);
      }
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <ThrusterParticleSystem
        position={[0.8, -4.4, 1]}
        visible={isAnimationActive(AnimationName.LIFTOFF)}
        particleStartColor={thrusterStartingColor}
        particleEndColor={thrusterEndingColor}
        count={200}
      />
      <SmokeParticleSystem
        visible={!isAnimationActive(AnimationName.LIFTOFF)}
        position={[0.75, -4.4, 1]}
      />
      {children}
    </group>
  );
};

export default LiftoffAnimation;
