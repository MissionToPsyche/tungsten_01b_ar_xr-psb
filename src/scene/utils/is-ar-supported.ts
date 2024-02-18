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

export default isArSupported;
