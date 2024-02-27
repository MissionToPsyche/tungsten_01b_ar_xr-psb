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
import ModelOutliner from '../common/components/ModelOutliner.tsx';
import useSceneConfig from './use-scene-config.ts';
import PersistentARMarker from '../common/components/PersistentARMarker.tsx';
import { OrbitControls, Stars } from '@react-three/drei';
import SceneControls from './SceneControls.tsx';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import ModelSpinner from '../common/components/ModelSpinner.tsx';

/**
 * Manages AR scenes.
 */
const SceneManager: ViewComponent = ({ changeView }) => {
  const config = useSceneConfig();
  const [currentScene, setCurrentScene] = useState(config.defaultScene);
  const { isAnimationActive, clearAnimations } = useAnimation();
  const orbitControls = useRef<OrbitControlsImpl>(null);

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

  const isTransitioningToPrevious = useMemo(() => {
    if (previousSceneTransition?.animation == null) {
      return false;
    }

    return isAnimationActive(previousSceneTransition.animation);
  }, [isAnimationActive, previousSceneTransition]);

  const isTransitioningToNext = useMemo(() => {
    if (nextSceneTransition?.animation == null) {
      return false;
    }

    return isAnimationActive(nextSceneTransition.animation);
  }, [isAnimationActive, nextSceneTransition]);

  const isTransitioning = useMemo(() => {
    return isTransitioningToPrevious || isTransitioningToNext;
  }, [isTransitioningToNext, isTransitioningToPrevious]);

  useEffect(() => {
    if (orbitControls.current && isTransitioning) {
      orbitControls.current.reset();
    }
  }, [isTransitioning]);

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
          <OrbitControls
            enabled={!isTransitioning}
            ref={orbitControls}
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
          <ModelSpinner speed={0.015} orientationY={true} orientationZ={true}>
            <Stars
              radius={50}
              depth={50}
              count={2000}
              factor={7}
              saturation={7}
              fade={true}
            />
          </ModelSpinner>
        </RenderIf>
        <SceneLighting />
        <PersistentARMarker markerUrl={markerUrl}>
          <group rotation={[config.markerXRotation, 0, 0]}>
            <ModelOutliner color={0xffffff}>
              <CurrentSceneComponent />
            </ModelOutliner>
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
