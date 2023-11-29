import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { ViewComponent } from '../view/types/view-component.ts';
import getSceneConfig from './get-scene-config.ts';
import { useCallback, useMemo, useState } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import LoaderProvider from '../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../common/loader/LoaderTracker.tsx';
import SceneLighting from '../common/components/SceneLighting.tsx';
import degreesToRadians from '../common/utils/degrees-to-radians.ts';
import SceneControls from './SceneControls.tsx';
import ViewName from '../view/types/view-name.ts';
import ARRenderSizeSynchronizer from '../common/components/ARRenderSizeSynchronizer.tsx';

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = ({ changeView }) => {
  const config = useMemo(getSceneConfig, []);
  const [currentScene, setCurrentScene] = useState(config.defaultScene);

  const onRestart = useCallback(() => {
    changeView(ViewName.LANDING_PAGE);
  }, [changeView]);

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
        <ARRenderSizeSynchronizer />
        <SceneLighting />
        <ARMarker
          type="pattern"
          patternUrl={markerUrl}
          params={{ smooth: true, smoothCount: 10 }}
        >
          <group rotation={[degreesToRadians(-75), 0, 0]}>
            <CurrentSceneComponent />
            <SceneControls
              position={[0, 0, 3]}
              rotation={[degreesToRadians(-45), 0, 0]}
              onChangeScene={setCurrentScene}
              onRestart={onRestart}
              previousSceneTransition={previousSceneTransition}
              nextSceneTransition={nextSceneTransition}
            />
          </group>
        </ARMarker>
      </ARCanvas>
    </LoaderProvider>
  );
};

export default SceneManager;
