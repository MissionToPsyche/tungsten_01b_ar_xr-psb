import { useEffect, useMemo, useState } from 'react';
import { SceneConfig } from '../types/scene-config.ts';
import getSceneConfig from '../get-scene-config.ts';

const isArSupported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const isWebGLSupported = !!(
      canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl')
    );

    canvas.remove();
    const isWebRTCSupported = !!navigator.mediaDevices.getUserMedia;

    return isWebGLSupported && isWebRTCSupported;
  } catch (error) {
    return false;
  }
};

const useSceneConfig = (): SceneConfig => {
  const [arSupported, setArSupported] = useState(true);

  useEffect(() => {
    const isSupported = isArSupported();
    setArSupported(isSupported);
  }, []);

  return useMemo(() => {
    const originalConfig = getSceneConfig();

    return {
      ...originalConfig,
      disableAr: arSupported ? originalConfig.disableAr : false
    };
  }, [arSupported]);
};

export default useSceneConfig;
