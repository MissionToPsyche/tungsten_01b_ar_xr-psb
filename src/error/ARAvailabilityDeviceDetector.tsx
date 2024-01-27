import { useEffect } from 'react';
import { SceneConfig } from '../scene/types/scene-config';

interface ARAvailabilityDeviceDetectorProps {
  sceneConfig: SceneConfig;
}

const ARAvailabilityDeviceDetector: React.FC<
  ARAvailabilityDeviceDetectorProps
> = ({ sceneConfig }) => {
  useEffect(() => {
    const checkWebXRSupport = async () => {
      try {
        // Check for WebXR support
        if (!navigator.xr) {
          throw new Error('WebXR not supported in this browser.');
        }

        // Check if the device supports WebXR
        const isSupported =
          await navigator.xr.isSessionSupported('immersive-ar');

        if (!isSupported) {
          console.error('WebXR AR not supported on this device.');

          // Disable AR in the scene configuration
          sceneConfig.disableAr = true;
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('WebXR Error:', error.message);
        }

        // Disable AR in the scene configuration on error
        sceneConfig.disableAr = true;
      }
    };

    void checkWebXRSupport();

    // Log other device information
    const device = navigator.userAgent || 'Unknown Device';
    const osVersion = navigator.platform || 'Unknown OS Version';
    const browser = navigator.appVersion || 'Unknown Browser';

    // Log the information
    console.log('Device:', device);
    console.log('OS Version:', osVersion);
    console.log('Browser:', browser);
  }, [sceneConfig]);

  return null;
};

export default ARAvailabilityDeviceDetector;
