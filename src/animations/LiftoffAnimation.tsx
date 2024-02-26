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

      if (elapsed >= 3 && elapsed <= 10 && !arEnabled) {
        state.camera.rotation.x += delta * 0.15;
      }

      if (elapsed >= 14) {
        setElapsed(0);
        stopAnimation(AnimationName.LIFTOFF);
      }
    }
  });
  const isMobile = window.innerWidth < 768;
  const minCount = 150;
  const maxCount = 400;
  return (
    <group ref={groupRef} {...props}>
      <ThrusterParticleSystem
        visible={isAnimationActive(AnimationName.LIFTOFF)}
        particleStartColor={thrusterStartingColor}
        particleEndColor={thrusterEndingColor}
        count={isMobile ? minCount : maxCount}
        position={isMobile ? [1.4, -4.5, 0] : [2.1, -4.2, 0]}
      />
      <SmokeParticleSystem
        visible={!isAnimationActive(AnimationName.LIFTOFF)}
        count={isMobile ? minCount : maxCount}
        position={isMobile ? [1.4, -4.5, 0] : [2.2, -4.2, 0]}
      />
      {children}
    </group>
  );
};

export default LiftoffAnimation;
