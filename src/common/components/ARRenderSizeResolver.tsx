import { useFrame, useThree } from '@react-three/fiber';
import { Circle } from '@react-three/drei';
import filledVector from '../utils/filled-vector.ts';
import React, { useEffect, useState } from 'react';
import { PerspectiveCamera, Vector3 } from 'three';

/**
 * Corrects renderer sizes in AR scenes resolving click and perspective issues
 * @param debug Warn: Expensive. Draws a debug circle where the pointer was last projected to world space. Useful to
 * determine if the camera inverse projection matrix is accurate.
 */
const ARRenderSizeResolver: React.FC<{ debug?: boolean }> = ({ debug }) => {
  const [debugCirclePosition, setDebugCirclePosition] = useState(new Vector3());
  const { gl, camera } = useThree();

  useEffect(() => {
    const perspectiveCamera = camera as PerspectiveCamera;
    const canvases = document.getElementsByTagName('canvas');

    if (canvases.length == 0) {
      return;
    }

    const canvas = canvases[0];

    gl.setSize(window.innerWidth, window.innerHeight);
    canvas.style.marginLeft = '0px';
    perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
    perspectiveCamera.updateProjectionMatrix();
  });

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
    <Circle position={debugCirclePosition} scale={filledVector(0.01)}>
      <meshBasicMaterial color="blue" wireframe />
    </Circle>
  );
};

export default ARRenderSizeResolver;
