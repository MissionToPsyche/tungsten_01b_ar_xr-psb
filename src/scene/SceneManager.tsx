import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { ViewComponent } from '../view/types/view-component.ts';
import { useCallback, useState } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import LoaderProvider from '../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../common/loader/LoaderTracker.tsx';
import SceneLighting from '../common/components/SceneLighting.tsx';
import degreesToRadians from '../common/utils/degrees-to-radians.ts';
import SceneControls from './SceneControls.tsx';
import ViewName from '../view/types/view-name.ts';
import ARRenderSizeSynchronizer from '../common/components/ARRenderSizeSynchronizer.tsx';
import RenderIf from '../common/components/RenderIf.tsx';
import ModelOutliner from '../common/components/ModelOutliner.tsx';
import useConfig from '../error/useConfig.ts';
import ARAvailabilityDeviceDetector from '../error/ARAvailabilityDeviceDetector.tsx';

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = ({ changeView }) => {
  const config = useConfig();
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
      <ARAvailabilityDeviceDetector sceneConfig={config} />
      <ARCanvas
        arEnabled={!config.disableAr}
        onCreated={fitGlToWindow}
        cameraParametersUrl={config.cameraParametersUrl}
        gl={{ logarithmicDepthBuffer: true }}
        camera={config.disableAr ? { position: [0, 15, 15] } : undefined}
        linear
        flat
      >
        <ARRenderSizeSynchronizer />
        <RenderIf shouldRender={config.disableAr}>
          <color attach="background" args={['skyblue']} />
        </RenderIf>
        <SceneLighting />
        <ARMarker
          type="pattern"
          patternUrl={markerUrl}
          params={{ smooth: true }}
        >
          <ModelOutliner color={0xffffff}>
            <CurrentSceneComponent />
            <SceneControls
              position={[0, 0, 3]}
              rotation={[degreesToRadians(-45), 0, 0]}
              onChangeScene={setCurrentScene}
              onRestart={onRestart}
              previousSceneTransition={previousSceneTransition}
              nextSceneTransition={nextSceneTransition}
            />
          </ModelOutliner>
        </ARMarker>
      </ARCanvas>
    </LoaderProvider>
  );
};

export default SceneManager;
