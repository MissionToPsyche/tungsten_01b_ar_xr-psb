import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Euler, Group } from 'three';
import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import filledVector from '../common/utils/filled-vector';
import { CruiseOrbiter } from '../artifacts/CruiseOrbiter';
import { Mars } from '../artifacts/Mars';
import RenderIf from '../common/components/RenderIf';
import degreesToRadians from '../common/utils/degrees-to-radians';

const marsScale = filledVector(35);
const translationSpeed = 35;
const orbiterScale = filledVector(0.75);
const defaultOrbiterRotation = new Euler(
  degreesToRadians(100),
  degreesToRadians(0),
  degreesToRadians(-140)
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
    if (marsRef.current.position.x >= -200) {
      marsRef.current.position.x -= delta * 50;
    } else {
      // Move orbiter
      orbiterRef.current.position.z -= delta * translationSpeed;
      orbiterRef.current.position.x += (delta * translationSpeed) / 3;
    }
    if (elapsed >= 7 && elapsed <= 10) {
      orbiterRef.current.rotation.y += degreesToRadians(delta * 30);
    }
    if (elapsed >= 10 && elapsed <= 13) {
      orbiterRef.current.position.x -= delta * 100;
    }
    if (elapsed >= 13) {
      setElapsed(0);
      stopAnimation(AnimationName.CRUISE_GRAVITY_ASSIST);
    }
  });

  return (
    <group>
      <group ref={orbiterRef}>
        <CruiseOrbiter
          animatePanels={false}
          panelsOpen
          thrustersOn
          position={[0, 2, 2]}
          scale={orbiterScale}
          rotation={defaultOrbiterRotation}
        />
      </group>
      <group ref={marsRef} {...props}>
        <RenderIf shouldRender={true}>
          <Mars position={[200, -5, -150]} scale={marsScale} />
        </RenderIf>
      </group>
    </group>
  );
};

export default CruiseGravityAssistAnimation;
