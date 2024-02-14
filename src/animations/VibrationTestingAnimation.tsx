import useAnimation from './use-animation';
import AnimationName from './types/animation-name';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group } from 'three';

let oscillationSpeed = 0.2;
const xBound = 0.25;

const VibrationTestingAnimation: React.FC<JSX.IntrinsicElements['group']> = ({
  children,
  ...props
}) => {
  const { isAnimationActive, stopAnimation } = useAnimation();
  const meshRef = useRef<Group>(null);
  const [elapsed, setElapsed] = useState(0);

  useFrame((_, delta) => {
    if (
      meshRef.current == null ||
      !isAnimationActive(AnimationName.VIBRATION_TESTING)
    ) {
      return;
    }

    if (isAnimationActive(AnimationName.VIBRATION_TESTING)) {
      setElapsed((prev) => delta + prev);

      meshRef.current.position.x += oscillationSpeed;

      if (
        meshRef.current.position.x >= xBound ||
        meshRef.current.position.x <= -xBound
      ) {
        oscillationSpeed = -oscillationSpeed;
      }

      if (elapsed >= 2.0) {
        if (isAnimationActive(AnimationName.VIBRATION_TESTING)) {
          stopAnimation(AnimationName.VIBRATION_TESTING);
        }
      }
    }
  });

  return (
    <>
      <group ref={meshRef} {...props}>
        {children}
      </group>
    </>
  );
};

export default VibrationTestingAnimation;
