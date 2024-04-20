const isWebXrArSupported = async () => {
  if (!navigator.xr) {
    console.log('WebXR AR not supported, navigator.xr is undefined.');
    return false;
  }

  try {
    const isSupported = await navigator.xr.isSessionSupported('immersive-ar');

    console.log('WebXR AR supported:', isSupported);

    return isSupported;
  } catch (error) {
    console.log(
      'WebXR AR not supported, error checking for WebXR AR support:',
      error
    );
    return false;
  }
};

export default isWebXrArSupported;
