import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';

import { Earth } from '../artifacts/Earth';
import filledVector from '../common/utils/filled-vector';

import { CruiseOrbiter } from '../artifacts/CruiseOrbiter';
import useSettings from '../settings/use-settings';

const earthScale = filledVector(25);
const translationSpeed = 5;
const orbiterScale = filledVector(0.75);

/**
 * Cruise Thruster Animation
 */
const CruiseThrusterAnimation: React.FC<JSX.IntrinsicElements['group']> = ({
  ...props
}) => {
  const { isAnimationActive, stopAnimation } = useAnimation();
  const [elapsed, setElapsed] = useState(0);
  const earthRef = useRef<Group>(null);
  const orbiterRef = useRef<Group>(null);
  const { arEnabled } = useSettings();

  const isActive = useMemo(() => {
    return isAnimationActive(AnimationName.CRUISE_THRUSTERS);
  }, [isAnimationActive]);

  useFrame((state, delta) => {
    if (earthRef.current == null || orbiterRef.current == null) {
      return;
    }

    earthRef.current.position.z -= delta * 0.5;
    earthRef.current.position.x += delta * 0.5;

    if (!isAnimationActive(AnimationName.CRUISE_THRUSTERS)) {
      return;
    }

    setElapsed(elapsed + delta);

    earthRef.current.position.z -= delta * translationSpeed;
    earthRef.current.position.x += delta * translationSpeed;
    orbiterRef.current.position.z += delta;
    orbiterRef.current.position.x -= delta;

    if (elapsed >= 3 && elapsed <= 6) {
      orbiterRef.current.position.z += delta * 4;
      orbiterRef.current.position.x -= delta * 4;
    }
    if (elapsed >= 4 && elapsed <= 6 && !arEnabled) {
      state.camera.position.z -= delta;
      state.camera.rotation.y += delta;
    }
    if (elapsed >= 6) {
      orbiterRef.current.position.z += delta * 15;
      orbiterRef.current.position.x -= delta * 15;
    }
    if (elapsed >= 8) {
      setElapsed(0);
      stopAnimation(AnimationName.CRUISE_THRUSTERS);
    }
  });

  return (
    <group>
      <group ref={orbiterRef}>
        <CruiseOrbiter
          thrustersOn={isActive}
          position={[0, 2, 2]}
          scale={orbiterScale}
          rotation={[Math.PI / 5, Math.PI / 5, Math.PI / 6]}
          panelsOpen={true}
          animatePanels={false}
        />
      </group>
      <group ref={earthRef} {...props}>
        <Earth position={[-10, -5, -60]} scale={earthScale} />
      </group>
    </group>
  );
};

export default CruiseThrusterAnimation;
