import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { ViewComponent } from '../view/types/view-component.ts';
import getSceneConfig from './get-scene-config.ts';
import { useMemo, useState } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import LoaderProvider from '../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../common/loader/LoaderTracker.tsx';
import SceneLighting from '../common/components/SceneLighting.tsx';
import ARRenderSizeResolver from '../common/components/ARRenderSizeResolver.tsx';

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
        </ARMarker>
      </ARCanvas>
    </LoaderProvider>
  );
};

export default SceneManager;
