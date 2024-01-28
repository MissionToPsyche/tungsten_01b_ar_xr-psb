import { useEffect, useMemo, useState } from 'react';
import { SceneConfig } from '../scene/types/scene-config.ts';
import getSceneConfig from '../scene/get-scene-config.ts';

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

const useConfig = (): SceneConfig => {
  const [arSupported, setArSupported] = useState(true);

  useEffect(async () => {
    const isSupported = await isArSupported();
    setArSupported(isSupported);
  }, []);

  const sceneConfig = useMemo(
    () => ({
      ...getSceneConfig(),
      disableAr: arSupported ? getSceneConfig().disableAr || false
    }),
    []
  );

  return sceneConfig;
};

export default useConfig;
