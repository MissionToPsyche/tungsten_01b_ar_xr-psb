import React, { RefObject, useMemo, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

const ARMarkerMirror: React.FC<
  React.PropsWithChildren<{ markerChildRef: RefObject<Group> }>
> = ({ children, markerChildRef }) => {
  const groupRef = useRef<Group>(null);

  const marker = useMemo(() => {
    const current = markerChildRef.current;

    if (!current) {
      return undefined;
    }

    return current.parent as Group;
  }, [markerChildRef]);

  useFrame(() => {
    const mirror = groupRef.current;

    if (!marker || !mirror) {
      return;
    }

    mirror.position.copy(marker.position);
    mirror.rotation.copy(marker.rotation);
  });

  return <group ref={groupRef}>{children}</group>;
};

export default ARMarkerMirror;
