import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { Vector3 } from '@react-three/fiber';
import { ViewComponent } from '../view/types/view-component.ts';
import getSceneConfig from './get-scene-config.ts';
import { useMemo, useState } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import LoaderProvider from '../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../common/loader/LoaderTracker.tsx';

const lightPosition: Vector3 = [10, 10, 0];

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = () => {
  const config = useMemo(getSceneConfig, []);
  const [currentScene] = useState(config.defaultScene);

  const { component: CurrentSceneComponent, markerUrl } =
    config.scenes[currentScene];

  return (
    <LoaderProvider>
      <LoaderTracker />
      <ARCanvas
        camera={{ position: [0, 0, 0] }}
        onCreated={fitGlToWindow}
        cameraParametersUrl={config.cameraParametersUrl}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={lightPosition} intensity={0.5} />
        <ARMarker
          type="pattern"
          patternUrl={markerUrl}
          params={{ smooth: true }}
        >
          <CurrentSceneComponent />
        </ARMarker>
      </ARCanvas>
    </LoaderProvider>
  );
};

export default SceneManager;
