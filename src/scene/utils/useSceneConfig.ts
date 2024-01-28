import { useEffect, useMemo, useState } from 'react';
import { SceneConfig } from '../types/scene-config.ts';
import getSceneConfig from '../get-scene-config.ts';

const isArSupported = async () => {
  try {
    // Check for WebXR support
    if (!navigator.xr) {
      return false;
    }

    // Check if the device supports WebXR
    const isSupported = await navigator.xr.isSessionSupported('immersive-ar');

    if (!isSupported) {
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
};

const useSceneConfig = (): SceneConfig => {
  const [arSupported, setArSupported] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isSupported = await isArSupported();
        setArSupported(isSupported);
      } catch (error) {
        // Handle errors, e.g., log or set an error state
        console.error('Error checking AR support:', error);
      }
    };

    void fetchData();
  }, []);

  return useMemo(
    () => ({
      ...getSceneConfig(),
      disableAr: arSupported ? getSceneConfig().disableAr : false
    }),
    [arSupported]
  );
};

export default useSceneConfig;
