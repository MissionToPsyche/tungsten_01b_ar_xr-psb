import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { ViewComponent } from '../view/types/view-component.ts';
import getSceneConfig from './get-scene-config.ts';
import { useMemo, useState } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import SceneLighting from '../common/components/SceneLighting.tsx';

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = () => {
  const config = useMemo(getSceneConfig, []);
  const [currentScene] = useState(config.defaultScene);

  const { component: CurrentSceneComponent, markerUrl } =
    config.scenes[currentScene];

  return (
    <ARCanvas
      camera={{ position: [0, 0, 0] }}
      onCreated={fitGlToWindow}
      cameraParametersUrl={config.cameraParametersUrl}
      linear
      flat
    >
      <SceneLighting />
      <ARMarker type="pattern" patternUrl={markerUrl} params={{ smooth: true }}>
        <CurrentSceneComponent />
      </ARMarker>
    </ARCanvas>
  );
};

export default SceneManager;
