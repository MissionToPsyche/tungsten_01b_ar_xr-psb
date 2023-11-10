import { useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import useLoader from './use-loader.ts';

/**
 * A component that tracks Three.js loading progress and reports it back to the
 * loader.
 */
const LoaderTracker = () => {
  const { progress } = useProgress();
  const { setProgress } = useLoader();

  useEffect(() => {
    setProgress(progress);
  }, [progress, setProgress]);

  return null;
};

export default LoaderTracker;
