// Adapted from https://github.com/artcom/react-three-arjs/blob/main/src/ar/arCanvas.js

import { Canvas, CanvasProps, EventManager, events } from '@react-three/fiber';
import ARContextProvider from './ARContextProvider.tsx';
import React from 'react';

const eventManagerFactory = (
  state: Parameters<typeof events>[0]
): EventManager<HTMLElement> => ({
  ...events(state),
  compute(event, state) {
    state.pointer.set(
      (event.clientX / state.size.width) * 2 - 1,
      -(event.clientY / state.size.height) * 2 + 1
    );
    state.raycaster.setFromCamera(state.pointer, state.camera);
  }
});

const ARCanvas = ({
  children,
  onCreated
}: React.PropsWithChildren<{
  onCreated?: CanvasProps['onCreated'];
}>) => (
  <Canvas
    events={eventManagerFactory}
    camera={{ position: [0, 0, 0] }}
    onCreated={onCreated}
  >
    <ARContextProvider
      patternRatio={0.5}
      matrixCodeType={'3x3'}
      detectionMode={'mono_and_matrix'}
      sourceType={'webcam'}
      cameraParametersUrl={'assets/camera_para.dat'}
    >
      {children}
    </ARContextProvider>
  </Canvas>
);

export default ARCanvas;
