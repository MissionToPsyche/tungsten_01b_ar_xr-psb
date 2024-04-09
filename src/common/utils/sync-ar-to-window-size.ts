import { PerspectiveCamera, WebGLRenderer } from 'three';

const syncArToWindowSize = (
  renderer: WebGLRenderer,
  camera: PerspectiveCamera
) => {
  const canvases = document.getElementsByTagName('canvas');
  if (canvases.length != 1) {
    throw Error('Unable to locate the <canvas/> element');
  }

  const canvas = canvases[0];
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  canvas.style.marginLeft = '0px';
  canvas.style.marginTop = '0px';
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

export default syncArToWindowSize;
