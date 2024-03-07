import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

/**
 * Spins a model on its y-axis for display.
 */
const ModelSpinner: React.FC<
  JSX.IntrinsicElements['group'] & {
    speed: number;
    orientationX?: boolean;
    orientationY?: boolean;
    orientationZ?: boolean;
  }
> = ({ speed, orientationX, orientationY, orientationZ, ...props }) => {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current == null) {
      return;
    }
    if (orientationX) {
      groupRef.current.rotation.x += delta * speed;
    }
    if (orientationY) {
      groupRef.current.rotation.y += delta * speed;
    }
    if (orientationZ) {
      groupRef.current.rotation.z += delta * speed;
    }
  });

  return <group ref={groupRef} {...props} />;
};

export default ModelSpinner;
