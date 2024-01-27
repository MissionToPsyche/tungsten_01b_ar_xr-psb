import { useEffect } from 'react';

function DeviceDetectorErrorBoundary() {
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
          throw new Error('WebXR AR not supported on this device.');
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('WebXR Error:', error.message);
        }
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
  }, []);

  return null;
}

export default DeviceDetectorErrorBoundary;
