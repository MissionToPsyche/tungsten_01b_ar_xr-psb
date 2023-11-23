import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { ViewComponent } from '../view/types/view-component.ts';
import getSceneConfig from './get-scene-config.ts';
import { useMemo, useState } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import LoaderProvider from '../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../common/loader/LoaderTracker.tsx';
import SceneLighting from '../common/components/SceneLighting.tsx';
import degreesToRadians from '../common/utils/degrees-to-radians.ts';
import SceneControls from './SceneControls.tsx';
import ARRenderSizeResolver from '../common/components/ARRenderSizeResolver.tsx';

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = () => {
  const config = useMemo(getSceneConfig, []);
  const [currentScene, setCurrentScene] = useState(config.defaultScene);

  const {
    component: CurrentSceneComponent,
    markerUrl,
    previousSceneTransition,
    nextSceneTransition
  } = config.scenes[currentScene];

  return (
    <LoaderProvider>
      <LoaderTracker />
      <ARCanvas
        onCreated={fitGlToWindow}
        cameraParametersUrl={config.cameraParametersUrl}
        gl={{ logarithmicDepthBuffer: true }}
        linear
        flat
      >
        <ARRenderSizeResolver />
        <SceneLighting />
        <ARMarker
          type="pattern"
          patternUrl={markerUrl}
          params={{ smooth: true }}
        >
          <CurrentSceneComponent />
          <SceneControls
            position={[0, 0, 3]}
            rotation={[degreesToRadians(-45), 0, 0]}
            onChangeScene={setCurrentScene}
            previousSceneTransition={previousSceneTransition}
            nextSceneTransition={nextSceneTransition}
          />
        </ARMarker>
      </ARCanvas>
    </LoaderProvider>
  );
};

export default SceneManager;
