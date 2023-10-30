import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

/**
 * Spins a model on its y-axis for display.
 */
const ModelSpinner: React.FC<JSX.IntrinsicElements['group']> = (props) => {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current == null) {
      return;
    }

    groupRef.current.rotation.y = clock.getElapsedTime();
  });

  return <group ref={groupRef} {...props} />;
};

export default ModelSpinner;
