import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

/**
 * Spins a model on its y-axis for display.
 */
const ModelSpinner: React.FC<
  JSX.IntrinsicElements['group'] & { speed: number }
> = ({ speed, ...props }) => {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current == null) {
      return;
    }

    groupRef.current.rotation.y += delta * speed;
  });

  return <group ref={groupRef} {...props} />;
};

export default ModelSpinner;
