import { ViewComponent } from '../view/types/view-component.ts';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import LoaderProvider from '../common/loader/LoaderProvider.tsx';
import LoaderTracker from '../common/loader/LoaderTracker.tsx';
import ViewName from '../view/types/view-name.ts';
import useAnimation from '../animations/use-animation.ts';
import useSceneConfig from './use-scene-config.ts';
import { CameraControls, useGLTF } from '@react-three/drei';
import SceneControls from './SceneControls.tsx';

import useScene from './use-scene.ts';
import { useBreakpointValue } from '@chakra-ui/react';
import SceneName from './types/scene-name.ts';
import SceneCanvas from './SceneCanvas.tsx';

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
    setCurrentScene(SceneName.ASSEMBLY);
    changeView(ViewName.LANDING_PAGE);
  }, [changeView, clearAnimations, setCurrentScene]);

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
      <SceneCanvas
        markerUrl={markerUrl}
        cameraEnabled={cameraEnabled}
        cameraControls={cameraControls}
      >
        <group
          rotation={[config.markerXRotation, 0, 0]}
          scale={currentSceneScale}
        >
          <CurrentSceneComponent />
        </group>
      </SceneCanvas>
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
