import { useEffect, useMemo, useState } from 'react';
import { SceneConfig } from '../types/scene-config.ts';
import getSceneConfig from '../get-scene-config.ts';

const isArSupported = () => {
  try {
    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const isWebGLSupported = !!(
      canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl')
    );

    // Check for WebRTC support
    const isWebRTCSupported = !!navigator.mediaDevices.getUserMedia;

    return isWebGLSupported && isWebRTCSupported;
  } catch (error) {
    return false;
  }
};

const useSceneConfig = (): SceneConfig => {
  const [arSupported, setArSupported] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const isSupported = isArSupported();
      setArSupported(isSupported);
    };

    fetchData();
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
