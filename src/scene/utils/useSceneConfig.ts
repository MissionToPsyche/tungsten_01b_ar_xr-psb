import { useEffect, useMemo, useState } from 'react';
import { SceneConfig } from '../types/scene-config.ts';
import getSceneConfig from '../get-scene-config.ts';

interface ArSupportResult {
  isSupported: boolean;
  canvas: HTMLCanvasElement | null;
}

const isArSupported = (): ArSupportResult => {
  try {
    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const isWebGLSupported = !!(
      canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl')
    );
    // Check for WebRTC support
    const isWebRTCSupported = !!navigator.mediaDevices.getUserMedia;

    return { isSupported: isWebGLSupported && isWebRTCSupported, canvas };
  } catch (error) {
    return { isSupported: false, canvas: null };
  }
};

const useSceneConfig = (): SceneConfig => {
  const [arSupported, setArSupported] = useState(true);

  useEffect(() => {
    const { isSupported, canvas } = isArSupported();
    setArSupported(isSupported);
    cleanupCanvas(canvas);
  }, []);

  const cleanupCanvas = (canvas: HTMLCanvasElement | null) => {
    // Add cleanup logic here, if needed
    if (canvas) {
      // Add canvas removal logic
      canvas.remove();
    }
  };

  return useMemo(
    () => ({
      ...getSceneConfig(),
      disableAr: arSupported ? getSceneConfig().disableAr : false
    }),
    [arSupported]
  );
};

export default useSceneConfig;
