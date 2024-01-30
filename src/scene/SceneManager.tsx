import { ARCanvas } from '@artcom/react-three-arjs';
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
import useAnimation from '../animations/use-animation.ts';
import RenderIf from '../common/components/RenderIf.tsx';
import ModelOutliner from '../common/components/ModelOutliner.tsx';
import PersistentARMarker from '../common/components/PersistentARMarker.tsx';

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = ({ changeView }) => {
  const config = useMemo(getSceneConfig, []);
  const [currentScene, setCurrentScene] = useState(config.defaultScene);
  const { clearAnimations } = useAnimation();

  const onRestart = useCallback(() => {
    clearAnimations();
    changeView(ViewName.LANDING_PAGE);
  }, [changeView, clearAnimations]);

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
        <PersistentARMarker markerUrl={markerUrl}>
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
        </PersistentARMarker>
      </ARCanvas>
    </LoaderProvider>
  );
};

export default SceneManager;
