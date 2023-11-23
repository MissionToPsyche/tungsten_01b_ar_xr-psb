import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import syncArToWindowSize from '../utils/sync-ar-to-window-size.ts';
import { PerspectiveCamera } from 'three';

/**
 * Hook that syncs ar renderer and camera properties to the window size
 */
const useSyncArToWindowSize = () => {
  const { gl, camera } = useThree();

  useEffect(() => {
    syncArToWindowSize(gl, camera as PerspectiveCamera);
  });
};

export default useSyncArToWindowSize;
