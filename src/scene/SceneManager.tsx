import { ARCanvas } from '@artcom/react-three-arjs';
import { ViewComponent } from '../view/types/view-component.ts';
import { useCallback, useState } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import LoaderProvider from '../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../common/loader/LoaderTracker.tsx';
import SceneLighting from '../common/components/SceneLighting.tsx';
import ViewName from '../view/types/view-name.ts';
import ARRenderSizeSynchronizer from '../common/components/ARRenderSizeSynchronizer.tsx';
import useAnimation from '../animations/use-animation.ts';
import RenderIf from '../common/components/RenderIf.tsx';
import ModelOutliner from '../common/components/ModelOutliner.tsx';
import useSceneConfig from './utils/useSceneConfig.ts';
import PersistentARMarker from '../common/components/PersistentARMarker.tsx';
import { OrbitControls, Stars } from '@react-three/drei';
import SceneControls from './SceneControls.tsx';
import useAudio from '../audio/use-audio.ts';

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = ({ changeView }) => {
  const config = useSceneConfig();
  const [currentScene, setCurrentScene] = useState(config.defaultScene);
  const { clearAnimations } = useAnimation();
  const { setEnabled } = useAudio();

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

  // Set audio state
  setEnabled(!config.disableAudio);
  return (
    <LoaderProvider>
      <LoaderTracker />
      <ARCanvas
        arEnabled={!config.disableAr}
        onCreated={fitGlToWindow}
        cameraParametersUrl={config.cameraParametersUrl}
        gl={{ logarithmicDepthBuffer: true }}
        camera={config.disableAr ? { position: [0, 6, 18] } : undefined}
        linear
        flat
      >
        <ARRenderSizeSynchronizer />
        <RenderIf shouldRender={config.disableAr}>
          <color attach="background" args={['#2e4371']} />
          <OrbitControls
            zoomSpeed={0.8}
            rotateSpeed={0.8}
            panSpeed={0.5}
            minAzimuthAngle={-Math.PI / 1.2}
            maxAzimuthAngle={Math.PI / 1.2}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2}
            maxZoom={0.04}
            maxDistance={30}
          />
          <Stars
            radius={50}
            depth={50}
            count={2000}
            factor={6}
            saturation={7}
            fade={true}
          />
          <Stars
            radius={100}
            depth={80}
            count={2000}
            factor={4}
            saturation={5}
            fade={true}
          />
        </RenderIf>
        <SceneLighting />
        <PersistentARMarker markerUrl={markerUrl}>
          <ModelOutliner color={0xffffff}>
            <CurrentSceneComponent />
          </ModelOutliner>
        </PersistentARMarker>
      </ARCanvas>
      <SceneControls
        onChangeScene={setCurrentScene}
        onRestart={onRestart}
        previousSceneTransition={previousSceneTransition}
        nextSceneTransition={nextSceneTransition}
      />
    </LoaderProvider>
  );
};

export default SceneManager;
