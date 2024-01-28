import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import lerpWithMaxDelta from '../utils/lerp-with-max-delta.ts';
import slerpWithMaxDelta from '../utils/slerp-with-max-delta.ts';

const positionAlpha = 0.3;
const rotationAlpha = 0.2;
const maxPositionDeltaToMirror = 100;
const maxRotationDeltaToMirror = 1;

/**
 * A marker that mirrors the state of an actual AR marker. Ensuring to only mirror rotations and positions that are not
 * a large distance away from the current rotation and position.
 * @param children The children of the marker to display
 * @param markerChildRef A ref for a group that is the child of the marker. Used to locate the actual marker since it
 * isn't set up to forward refs.
 * @param isMarkerVisible Is the actual marker currently visible?
 */
const ARMarkerMirror: React.FC<
  React.PropsWithChildren<{
    markerChildRef: RefObject<Group>;
    isMarkerVisible: boolean;
  }>
> = ({ children, markerChildRef, isMarkerVisible }) => {
  const mirrorRef = useRef<Group>(null);
  const [isMirrorVisible, setIsMirrorVisible] = useState(false);

  useEffect(() => {
    if (!isMarkerVisible || isMirrorVisible) {
      return;
    }

    setIsMirrorVisible(true);

    const marker = markerChildRef.current?.parent;
    const mirror = mirrorRef.current;

    if (!marker || !mirror) {
      return;
    }

    mirror.position.copy(marker.position);
    mirror.rotation.copy(marker.rotation);
  }, [isMarkerVisible, isMirrorVisible, markerChildRef]);

  useFrame(() => {
    const marker = markerChildRef.current?.parent;
    const mirror = mirrorRef.current;

    if (!marker || !mirror) {
      return;
    }

    lerpWithMaxDelta(
      mirror.position,
      marker.position,
      positionAlpha,
      maxPositionDeltaToMirror
    );
    slerpWithMaxDelta(
      mirror.quaternion,
      marker.quaternion,
      rotationAlpha,
      maxRotationDeltaToMirror
    );
  });

  return (
    <group ref={mirrorRef} visible={isMirrorVisible}>
      {children}
    </group>
  );
};

export default ARMarkerMirror;
