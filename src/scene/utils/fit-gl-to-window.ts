import { WebGLRenderer } from 'three';

/**
 * Fits the WebGL render to the document window
 * @param gl The WebGL renderer
 */
const fitGlToWindow = ({ gl }: { gl: WebGLRenderer }) => {
  gl.setSize(window.innerWidth, window.innerHeight);
};

export default fitGlToWindow;
