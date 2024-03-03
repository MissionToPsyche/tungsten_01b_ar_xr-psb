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
    // An observer that syncs the AR renderer to the window size when the video element changes
    const videoObserver = new MutationObserver((mutations) => {
      mutations.forEach(({ type, attributeName }) => {
        if (type === 'attributes' && attributeName === 'style') {
          syncArToWindowSize(gl, camera as PerspectiveCamera);
        }
      });
    });

    // An observer that watches for the video element to be added to the DOM so that the video observer can be attached
    const videoPresenceObserver = new MutationObserver((mutations) => {
      mutations.forEach(({ type }) => {
        if (type === 'childList') {
          const video = document.getElementById('arjs-video');

          if (!video) {
            return;
          }

          videoObserver.observe(video, { attributes: true });
          videoPresenceObserver.disconnect();
        }
      });
    });

    videoPresenceObserver.observe(document.body, { childList: true });

    return () => {
      videoPresenceObserver.disconnect();
      videoObserver.disconnect();
    };
  }, [camera, gl]);
};

export default useSyncArToWindowSize;
