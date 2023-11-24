import { useFrame } from '@react-three/fiber';
import { Circle } from '@react-three/drei';
import filledVector from '../utils/filled-vector.ts';
import React, { useState } from 'react';
import { Vector3 } from 'three';
import useSyncArToWindowSize from '../hooks/use-sync-ar-to-window-size.ts';
import RenderIf from './RenderIf.tsx';

/**
 * Corrects renderer sizes in AR scenes resolving click and perspective issues. Necessary to be a component because it
 * accesses context that can only be used within the canvas
 * @param debug WARN: Expensive. Draws a debug circle where the pointer was last projected to world space. Useful to
 * determine if the camera inverse projection matrix is accurate.
 */
const ARRenderSizeSynchronizer: React.FC<{ debug?: boolean }> = ({ debug }) => {
  const [debugCirclePosition, setDebugCirclePosition] = useState(new Vector3());
  useSyncArToWindowSize();

  useFrame((state) => {
    if (!debug) {
      return;
    }

    debugCirclePosition.set(state.pointer.x, state.pointer.y, 0);
    debugCirclePosition.unproject(state.camera);
    // Necessary, warning described in interface
    // eslint-disable-next-line @react-three/no-clone-in-loop
    setDebugCirclePosition(debugCirclePosition.clone());
  });

  return (
    <RenderIf shouldRender={debug}>
      <Circle position={debugCirclePosition} scale={filledVector(0.01)}>
        <meshBasicMaterial color="blue" wireframe />
      </Circle>
    </RenderIf>
  );
};

export default ARRenderSizeSynchronizer;
