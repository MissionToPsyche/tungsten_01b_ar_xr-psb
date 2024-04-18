import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Euler, Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import filledVector from '../common/utils/filled-vector';
import { Mars } from '../artifacts/Mars';
import RenderIf from '../common/components/RenderIf';
import degreesToRadians from '../common/utils/degrees-to-radians';
import { CruiseOrbiter } from '../artifacts/CruiseOrbiter';

const marsScale = filledVector(45);
const translationSpeed = 35;
const orbiterScale = filledVector(0.75);
const defaultOrbiterRotation = new Euler(
  degreesToRadians(30),
  degreesToRadians(40),
  degreesToRadians(30)
);

/**
 * Cruise Thruster Animation
 */
const CruiseGravityAssistAnimation: React.FC<
  JSX.IntrinsicElements['group']
> = ({ ...props }) => {
  const { isAnimationActive, stopAnimation } = useAnimation();
  const [elapsed, setElapsed] = useState(0);
  const marsRef = useRef<Group>(null);
  const orbiterRef = useRef<Group>(null);

  const isActive = useMemo(() => {
    return isAnimationActive(AnimationName.CRUISE_GRAVITY_ASSIST);
  }, [isAnimationActive]);

  useFrame((_, delta) => {
    if (marsRef.current == null || orbiterRef.current == null) {
      return;
    }

    if (!isActive) {
      return;
    }

    setElapsed(elapsed + delta);

    // Move Mars into view
    if (marsRef.current.position.x <= 100) {
      marsRef.current.position.x += delta * 50;
    } else {
      // Move orbiter
      orbiterRef.current.position.z -= delta * translationSpeed;
      orbiterRef.current.position.x -= (delta * translationSpeed) / 2.5;
    }
    if (elapsed >= 4 && elapsed <= 7) {
      orbiterRef.current.rotation.x += degreesToRadians(delta * -20);
      orbiterRef.current.rotation.y += degreesToRadians(delta * 30);
    }
    if (elapsed >= 8 && elapsed <= 10) {
      orbiterRef.current.position.x += delta * 300;
      orbiterRef.current.position.y += delta * 30;
    }
    if (elapsed >= 11) {
      setElapsed(0);
      stopAnimation(AnimationName.CRUISE_GRAVITY_ASSIST);
    }
  });

  return (
    <group>
      <group ref={orbiterRef}>
        <CruiseOrbiter
          thrustersOn
          position={[0, 0, 2]}
          scale={orbiterScale}
          rotation={defaultOrbiterRotation}
        />
      </group>
      <group ref={marsRef} {...props}>
        <RenderIf shouldRender={isActive}>
          <Mars
            position={[-100, -5, -150]}
            scale={marsScale}
            rotation={[0, Math.PI / 2, 0]}
          />
        </RenderIf>
      </group>
    </group>
  );
};

export default CruiseGravityAssistAnimation;
