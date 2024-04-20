import React, { useEffect } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import { ARCanvas } from '@artcom/react-three-arjs';
import useSceneConfig from './use-scene-config.ts';
import ARRenderSizeSynchronizer from '../common/components/ARRenderSizeSynchronizer.tsx';
import RenderIf from '../common/components/RenderIf.tsx';
import { CameraControls, Stars } from '@react-three/drei';
import SceneLighting from '../common/components/SceneLighting.tsx';
import PersistentARMarker from '../common/components/PersistentARMarker.tsx';
import useCompatibility from '../compatibility/use-compatibility.ts';
import { Canvas } from '@react-three/fiber';
import { toggleSession, XR } from '@react-three/xr';

const WebXrCanvas: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    void toggleSession('immersive-ar', { enterOnly: true });
  }, []);

  return (
    <Canvas>
      <XR>{children}</XR>
    </Canvas>
  );
};

const SceneCanvas: React.FC<
  React.PropsWithChildren<{
    markerUrl: string;
    cameraEnabled: boolean;
    cameraControls: React.RefObject<CameraControls>;
  }>
> = ({ children, markerUrl, cameraEnabled, cameraControls }) => {
  const config = useSceneConfig();
  const { isWebXrArSupported } = useCompatibility();

  if (config.disableAr || !isWebXrArSupported) {
    return (
      <ARCanvas
        arEnabled={!config.disableAr}
        onCreated={fitGlToWindow}
        cameraParametersUrl={config.cameraParametersUrl}
        gl={{ logarithmicDepthBuffer: true }}
        camera={
          config.disableAr
            ? { position: config.defaultCameraPosition.toArray() }
            : undefined
        }
        linear
        flat
      >
        <ARRenderSizeSynchronizer />
        <RenderIf shouldRender={config.disableAr}>
          <color attach="background" args={['#2e4371']} />
          <CameraControls
            enabled={cameraEnabled}
            ref={cameraControls}
            minAzimuthAngle={-Math.PI / 1.2}
            maxAzimuthAngle={Math.PI / 1.2}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2}
            maxDistance={40}
          />
          <Stars
            radius={50}
            depth={50}
            count={500}
            factor={2}
            saturation={5}
            fade={false}
          />
        </RenderIf>
        <SceneLighting />
        <PersistentARMarker markerUrl={markerUrl}>
          {children}
        </PersistentARMarker>
      </ARCanvas>
    );
  }

  return <WebXrCanvas>{children}</WebXrCanvas>;
};

export default SceneCanvas;
