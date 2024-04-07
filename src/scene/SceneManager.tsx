import { ARCanvas } from '@artcom/react-three-arjs';
import { ViewComponent } from '../view/types/view-component.ts';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import fitGlToWindow from './utils/fit-gl-to-window.ts';
import LoaderProvider from '../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../common/loader/LoaderTracker.tsx';
import SceneLighting from '../common/components/SceneLighting.tsx';
import ViewName from '../view/types/view-name.ts';
import ARRenderSizeSynchronizer from '../common/components/ARRenderSizeSynchronizer.tsx';
import useAnimation from '../animations/use-animation.ts';
import RenderIf from '../common/components/RenderIf.tsx';
import useSceneConfig from './use-scene-config.ts';
import PersistentARMarker from '../common/components/PersistentARMarker.tsx';
import { CameraControls, Stars, useGLTF } from '@react-three/drei';
import SceneControls from './SceneControls.tsx';

import useScene from './use-scene.ts';
import { useBreakpointValue } from '@chakra-ui/react';

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = ({ changeView }) => {
  const config = useSceneConfig();
  const { clearAnimations } = useAnimation();
  const cameraControls = useRef<CameraControls>(null);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const {
    currentSceneConfig: {
      component: CurrentSceneComponent,
      markerUrl,
      previousSceneTransition,
      nextSceneTransition
    },
    isTransitioning,
    isTransitioningToPrevious,
    isTransitioningToNext,
    setCurrentScene
  } = useScene();
  useGLTF.preload(
    nextSceneTransition
      ? config.scenes[nextSceneTransition.toScene].artifactPaths
      : []
  );
  const nonArCurrentSceneScale = useBreakpointValue({
    base: 1,
    md: 1.2,
    lg: 1.4
  });

  const currentSceneScale = useMemo(() => {
    if (!config.disableAr) {
      return 1;
    }

    return nonArCurrentSceneScale;
  }, [config.disableAr, nonArCurrentSceneScale]);

  const onRestart = useCallback(() => {
    clearAnimations();
    changeView(ViewName.LANDING_PAGE);
  }, [changeView, clearAnimations]);

  useEffect(() => {
    if (cameraControls.current && isTransitioning) {
      void cameraControls.current.reset(true);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioningToNext) {
      const cameraTimeout = setTimeout(() => {
        setCameraEnabled(false);
        return () => {
          clearTimeout(cameraTimeout);
        };
      }, 1000);
    } else {
      setCameraEnabled(true);
    }
  }, [isTransitioningToNext]);

  return (
    <LoaderProvider>
      <LoaderTracker />
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
          <group
            rotation={[config.markerXRotation, 0, 0]}
            scale={currentSceneScale}
          >
            <CurrentSceneComponent />
          </group>
        </PersistentARMarker>
      </ARCanvas>
      <SceneControls
        transitionToNext={isTransitioningToNext}
        transitionToPrev={isTransitioningToPrevious}
        transitioning={isTransitioning}
        onChangeScene={setCurrentScene}
        onRestart={onRestart}
        previousSceneTransition={previousSceneTransition}
        nextSceneTransition={nextSceneTransition}
      />
    </LoaderProvider>
  );
};

export default SceneManager;
